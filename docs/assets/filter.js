async function main() {
    const problems = await fetch("problems.json").then(res => res.json());

    const allTags = [...new Set(
        problems.flatMap(problem => problem.topics)
    )].sort();

    const filters = document.getElementById("filters");
    const table = document.getElementById("problem-table");

    let sortOrder = null; // null | "asc" | "desc"

    // --- Render filters ---
    filters.innerHTML = `
        <div class="md-typeset">
            <h3>Filters</h3>

            <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:flex-end; margin-bottom:12px;">
                <label style="display:flex; flex-direction:column; gap:4px; font-size:0.85rem;">
                    Min Rating
                    <input id="min-rating" type="number" placeholder="e.g. 1500"
                        style="width:120px; padding:5px 8px; border-radius:6px;
                               border:1px solid var(--md-default-fg-color--lighter);
                               background:var(--md-default-bg-color);
                               color:var(--md-default-fg-color);">
                </label>
                <label style="display:flex; flex-direction:column; gap:4px; font-size:0.85rem;">
                    Max Rating
                    <input id="max-rating" type="number" placeholder="e.g. 2200"
                        style="width:120px; padding:5px 8px; border-radius:6px;
                               border:1px solid var(--md-default-fg-color--lighter);
                               background:var(--md-default-bg-color);
                               color:var(--md-default-fg-color);">
                </label>
                <label style="display:flex; align-items:center; gap:6px; font-size:0.85rem; padding-bottom:2px;">
                    <input type="checkbox" id="hide-unrated">
                    Hide unrated
                </label>
            </div>

            <details>
                <summary style="font-weight:600; cursor:pointer; margin-bottom:10px;">Topics</summary>

                <input id="tag-search" type="text" placeholder="Search topics…"
                    style="width:100%; padding:5px 8px; margin-bottom:10px; box-sizing:border-box;
                           border-radius:6px; border:1px solid var(--md-default-fg-color--lighter);
                           background:var(--md-default-bg-color); color:var(--md-default-fg-color);">

                <div id="active-tags" style="display:flex; flex-wrap:wrap; gap:5px; margin-bottom:10px;"></div>

                <div id="tag-chips" style="display:flex; flex-wrap:wrap; gap:6px;">
                    ${allTags.map(tag => `
                        <button class="tag-chip" data-tag="${tag}">${tag}</button>
                    `).join("")}
                </div>
            </details>
        </div>
    `;

    // --- Chip styles (injected once) ---
    const style = document.createElement("style");
    style.textContent = `
        .tag-chip {
            padding: 3px 11px;
            border-radius: 999px;
            border: 1.5px solid var(--md-primary-fg-color);
            background: transparent;
            color: var(--md-primary-fg-color);
            cursor: pointer;
            font-size: 0.75rem;
            font-family: inherit;
            transition: background 0.15s, color 0.15s;
            line-height: 1.6;
        }
        .tag-chip:hover {
            background: var(--md-primary-fg-color--light, rgba(99,179,237,0.15));
        }
        .tag-chip.active {
            background: var(--md-primary-fg-color);
            color: var(--md-primary-bg-color);
        }
        .active-tag-pill {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            background: var(--md-primary-fg-color);
            color: var(--md-primary-bg-color);
            border-radius: 999px;
            padding: 2px 10px;
            font-size: 0.72rem;
        }
        .active-tag-pill button {
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            font-size: 0.9rem;
            padding: 0;
            line-height: 1;
            font-weight: bold;
        }
        #problem-table table {
            width: 100%;
        }
        #problem-table tbody tr:hover {
            background: var(--md-default-fg-color--lightest);
        }
        #problem-table td, #problem-table th {
            vertical-align: middle;
            padding-top: 12px;
            padding-bottom: 12px;
        }
        #rating-header {
            cursor: pointer;
            user-select: none;
            white-space: nowrap;
        }
        #rating-header:hover {
            opacity: 0.75;
        }
    `;
    document.head.appendChild(style);

    // --- Build table shell once ---
    table.innerHTML = `
        <div class="md-typeset">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Problem</th>
                        <th>Difficulty</th>
                        <th id="rating-header">Rating <span id="sort-arrow">↕</span></th>
                    </tr>
                </thead>
                <tbody id="problem-tbody"></tbody>
            </table>
            <p id="problem-count" style="color:var(--md-default-fg-color--light); font-size:0.85rem; margin-top:8px;"></p>
        </div>
    `;

    // --- Rating sort ---
    document.getElementById("rating-header").addEventListener("click", () => {
        if (sortOrder === null) sortOrder = "asc";
        else if (sortOrder === "asc") sortOrder = "desc";
        else sortOrder = null;

        document.getElementById("sort-arrow").textContent =
            sortOrder === "asc" ? "↑" : sortOrder === "desc" ? "↓" : "↕";
        render();
    });

    // --- Tag chip toggle ---
    document.getElementById("tag-chips").addEventListener("click", e => {
        const chip = e.target.closest(".tag-chip");
        if (!chip) return;
        chip.classList.toggle("active");
        updateActiveTags();
        render();
    });

    // --- Topic search ---
    document.getElementById("tag-search").addEventListener("input", e => {
        const q = e.target.value.toLowerCase();
        document.querySelectorAll(".tag-chip").forEach(chip => {
            chip.style.display = chip.dataset.tag.toLowerCase().includes(q) ? "" : "none";
        });
    });

    // --- Active tag pills ---
    function updateActiveTags() {
        const active = [...document.querySelectorAll(".tag-chip.active")].map(c => c.dataset.tag);
        const container = document.getElementById("active-tags");
        container.innerHTML = active.map(tag => `
            <span class="active-tag-pill">
                ${tag}
                <button data-tag="${tag}" aria-label="Remove ${tag}">×</button>
            </span>
        `).join("");

        container.querySelectorAll("button[data-tag]").forEach(btn => {
            btn.addEventListener("click", () => {
                const chip = document.querySelector(`.tag-chip[data-tag="${btn.dataset.tag}"]`);
                if (chip) chip.classList.remove("active");
                updateActiveTags();
                render();
            });
        });
    }

    // --- Render rows only ---
    function render() {
        const min = Number(document.getElementById("min-rating").value) || -Infinity;
        const max = Number(document.getElementById("max-rating").value) || Infinity;
        const hideUnrated = document.getElementById("hide-unrated").checked;
        const selectedTags = [...document.querySelectorAll(".tag-chip.active")].map(c => c.dataset.tag);

        const filtered = problems.filter(problem => {
            if (problem.rating == null) {
                if (hideUnrated) return false;
            } else {
                if (problem.rating < min) return false;
                if (problem.rating > max) return false;
            }
            if (selectedTags.length > 0 && !selectedTags.every(tag => problem.topics.includes(tag))) {
                return false;
            }
            return true;
        });

        if (sortOrder === "asc") {
            filtered.sort((a, b) => (a.rating ?? Infinity) - (b.rating ?? Infinity));
        } else if (sortOrder === "desc") {
            filtered.sort((a, b) => (b.rating ?? -Infinity) - (a.rating ?? -Infinity));
        }

        const diffColor = d => ({
            Easy: "color:#2e7d32",
            Medium: "color:#e65100",
            Hard: "color:#b71c1c",
        }[d] ?? "");

        document.getElementById("problem-tbody").innerHTML = filtered.map(problem => `
            <tr>
                <td style="color:var(--md-default-fg-color--light); font-size:0.85rem;">
                    ${problem.num}
                </td>
                <td>
                    <a href="${encodeURI(problem.url.replace(/\.md$/, "/"))}">
                        ${problem.title}
                    </a>
                </td>
                <td style="font-weight:600; font-size:0.85rem; ${diffColor(problem.difficulty)}">
                    ${problem.difficulty}
                </td>
                <td style="font-size:0.85rem;">
                    ${problem.rating ?? "—"}
                </td>
            </tr>
        `).join("");

        document.getElementById("problem-count").textContent =
            `Showing ${filtered.length} / ${problems.length} problems`;
    }

    // --- Listeners ---
    document.getElementById("min-rating").addEventListener("input", render);
    document.getElementById("max-rating").addEventListener("input", render);
    document.getElementById("hide-unrated").addEventListener("change", render);

    render();
}

document.addEventListener("DOMContentLoaded", main);
