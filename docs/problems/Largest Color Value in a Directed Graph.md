---
date: 2024-07-04
difficulty: Hard
num: 1857
related_topics:
  - Counting
  - Dynamic Programming
  - Graph
  - Hash Table
  - Memoization
  - Topological Sort
return: Review
---

# Problem: 1857. Largest Color Value In A Directed Graph

## Description
keep track of largest path that has matching colors

## Approach / Thoughts
keep 2d grid table and maximize with memo storage

## Solution
```python
class Solution:
    def largestPathValue(self, colors: str, edges: List[List[int]]) -> int:
        adj = defaultdict(list)
        for src, dest in edges:
            adj[src].append(dest)

        def dfs(node):
            if node in path:
                return float("inf")
            if node in visit:
                return 0
            visit.add(node)
            path.add(node)

            cIndex = ord(colors[node]) - ord('a')
            count[node][cIndex] = 1

            for nei in adj[node]:
                if dfs(nei) == float("inf"):
                    return float("inf")
                for c in range(26):
                    count[node][c] = max(
                        count[node][c], 
                        (1 if c == cIndex else 0) + count[nei][c]
                    )
            path.remove(node)
            return max(count[node])

        res = 0
        count = [[0] * 26 for i in range(len(colors))]
        visit, path = set(), set()
        for i in range(len(colors)):
            res = max(res, dfs(i))
        return res if res != float("inf") else -1
```
