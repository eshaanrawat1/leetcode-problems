---
date: 2024-11-21
difficulty: Medium
num: 1072
related_topics:
  - Array
  - Hash Table
  - Matrix
return: Done
---

# Problem: 1072. Flip Columns For Maximum Number Of Equal Rows

## Description

## Approach / Thoughts
find pattern of row and row reverse

## Solution
```python
class Solution:
    def maxEqualRowsAfterFlips(self, matrix: List[List[int]]) -> int:
        cnt = defaultdict(int)
        for row in matrix:
            cnt[tuple(row)] += 1
            row_flip = [1 if r == 0 else 0 for r in row]
            cnt[tuple(row_flip)] += 1
        return max(cnt.values())
```
