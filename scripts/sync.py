from pathlib import Path
import os
import shutil

import frontmatter
from dotenv import load_dotenv


load_dotenv()

OBSIDIAN_DIR = Path(os.environ["OBSIDIAN_DIR"])

MKDOCS_PROBLEMS_DIR = Path("docs/problems")
INDEX_FILE = Path("docs/index.md")


def extract_title(md_file: Path) -> str:
    """Convert filename into display title."""

    return md_file.stem.replace("-", " ").strip()


def parse_problem(md_file: Path) -> dict:
    """Parse markdown frontmatter."""

    post = frontmatter.load(md_file)
    metadata = post.metadata

    topics = metadata.get("related_topics") or []

    if isinstance(topics, str):
        topics = [topics]

    num = metadata.get("num")
    if num is not None:
        num = int(num)

    return {
        "num": num,
        "title": extract_title(md_file),
        "difficulty": metadata.get("difficulty", ""),
        "topics": topics,
        "return_val": metadata.get("return"),
        "url": f"problems/{md_file.name}",
    }


def copy_problem(md_file: Path):
    destination = MKDOCS_PROBLEMS_DIR / md_file.name

    shutil.copy2(
        md_file,
        destination,
    )


def generate_index(problems: list[dict]):
    INDEX_FILE.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    with INDEX_FILE.open(
        "w",
        encoding="utf-8",
    ) as f:

        f.write("# LeetCode Solutions\n\n")

        f.write(
            "| # | Problem | Difficulty |\n"
            "|---|---|---|\n"
        )

        for problem in problems:
            f.write(
                f"| {problem['num']} "
                f"| [{problem['title']}]({problem['url']}) "
                f"| {problem['difficulty']} |\n"
            )


def main():
    if not OBSIDIAN_DIR.exists():
        raise RuntimeError(
            f"Missing Obsidian directory: {OBSIDIAN_DIR}"
        )

    MKDOCS_PROBLEMS_DIR.mkdir(
        parents=True,
        exist_ok=True,
    )

    problems = []

    for md_file in OBSIDIAN_DIR.glob("*.md"):
        copy_problem(md_file)
        problems.append(parse_problem(md_file))

    problems.sort(
        key=lambda x: x["num"] if x["num"] else float("inf")
    )

    generate_index(problems)

    print(f"Copied {len(problems)} problems")
    print(f"Generated {INDEX_FILE}")


if __name__ == "__main__":
    main()
