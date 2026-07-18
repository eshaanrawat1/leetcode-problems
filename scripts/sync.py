from pathlib import Path
import json
import os
import shutil

import frontmatter
from dotenv import load_dotenv

load_dotenv()

OBSIDIAN_DIR = Path(os.environ["OBSIDIAN_DIR"])

MKDOCS_PROBLEMS_DIR = Path("docs/problems")
INDEX_FILE = Path("docs/index.md")
PROBLEMS_JSON = Path("docs/problems.json")
RATINGS_JSON = Path("docs/ratings.json")


def load_ratings() -> dict[int, int]:
    if not RATINGS_JSON.exists():
        return {}

    with RATINGS_JSON.open(encoding="utf-8") as f:
        return {
            int(k): v
            for k, v in json.load(f).items()
        }


def extract_title(md_file: Path) -> str:
    """Convert filename into display title."""
    return md_file.stem.replace("-", " ").strip()


def parse_problem(
    md_file: Path,
    ratings: dict[int, int],
) -> dict:
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
        "rating": ratings.get(num),
        "topics": sorted(topics),
        "return": metadata.get("return"),
        "url": f"problems/{md_file.name}",
    }


def copy_problem(md_file: Path):
    shutil.copy2(
        md_file,
        MKDOCS_PROBLEMS_DIR / md_file.name,
    )


def generate_problems_json(problems: list[dict]):
    with PROBLEMS_JSON.open(
        "w",
        encoding="utf-8",
    ) as f:
        json.dump(
            problems,
            f,
            indent=2,
        )


def generate_index(problems: list[dict]):
    with INDEX_FILE.open(
        "w",
        encoding="utf-8",
    ) as f:
        f.write("# LeetCode Solutions\n\n")

        f.write(
            "| # | Problem | Difficulty | Rating |\n"
            "|---|---|---|---|\n"
        )

        for problem in problems:
            rating = problem["rating"] or ""

            f.write(
                f"| {problem['num']} "
                f"| [{problem['title']}]({problem['url']}) "
                f"| {problem['difficulty']} "
                f"| {rating} |\n"
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

    ratings = load_ratings()
    problems = []

    for md_file in OBSIDIAN_DIR.glob("*.md"):
        problem = parse_problem(
            md_file,
            ratings,
        )

        copy_problem(md_file)
        problems.append(problem)

    problems.sort(
        key=lambda p: p["num"] if p["num"] is not None else float("inf")
    )

    generate_problems_json(problems)
    generate_index(problems)

    print(f"Copied {len(problems)} problems")
    print(f"Generated {PROBLEMS_JSON}")
    print(f"Generated {INDEX_FILE}")


if __name__ == "__main__":
    main()
