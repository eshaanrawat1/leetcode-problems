---
date: 2024-10-10
difficulty: Hard
num: 765
related_topics:
  - BFS
  - DFS
  - Graph
  - Greedy
  - Union Find
return: Done
---

# Problem: 765. Couples Holding Hands

## Description
min swaps to match couples

## Approach / Thoughts
brute force backtrack, try to swap complements of every other index, and update matching

## Solution
```python
class Solution:
    def minSwapsCouples(self, row: List[int]) -> int:
        couples = {}
        for i in range(0, len(row), 2):
            couples[i] = i + 1
            couples[i + 1] = i

        def mark_couples(row):
            for i in range(0, len(row), 2):
                if row[i] == 'X':
                    continue
                if couples[row[i]] == row[i + 1]:
                    row[i] = row[i + 1] = 'X'

        
        def dfs(i, row):
            if all(n == 'X' for n in row):
                return 0
            if i >= len(row):
                return float("inf")

            if row[i] == 'X':
                return dfs(i + 1, row)

            cur = row[i]
            comp = couples[cur]
            comp_idx = row.index(comp)

            row[i+1], row[comp_idx] = row[comp_idx], row[i+1]
            row_copy = row[:]
            mark_couples(row_copy)
            even_swap = 1 + dfs(i + 2, row_copy)

            return even_swap

        mark_couples(row)
        return dfs(0, row)
```
