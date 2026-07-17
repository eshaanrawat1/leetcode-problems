---
date: 2025-01-19
difficulty: Medium
num: 2661
related_topics:
  - Array
  - Hash Table
  - Matrix
return: Done
---

# Problem: 2661. First Completely Painted Row Or Column

## Description

## Approach / Thoughts
map to index, count of rows and cols seen

## Solution
```python
class Solution:
    def firstCompleteIndex(self, arr: List[int], mat: List[List[int]]) -> int:
        m, n = len(mat), len(mat[0])
        val_to_idx = {}

        for r in range(m):
            for c in range(n):
                val_to_idx[mat[r][c]] = (r, c)

        rows = Counter()
        cols = Counter()

        for i, k in enumerate(arr):
            r, c = val_to_idx[k]
            rows[r] += 1
            cols[c] += 1

            if rows[r] == n or cols[c] == m:
                return i
```
