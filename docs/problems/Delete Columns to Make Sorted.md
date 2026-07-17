---
date: 2025-12-19
difficulty: Easy
num: 944
related_topics:
  - Array
  - String
return: Done
---

# Problem: 944. Delete Columns To Make Sorted

## Description

## Approach / Thoughts
get each column

## Solution
```python
class Solution:
    def minDeletionSize(self, strs: List[str]) -> int:
        m, n = len(strs), len(strs[0])
        res = 0

        for c in range(n):
            cur_col = ''.join([strs[i][c] for i in range(m)])
            ss = ''.join(sorted(cur_col))

            if cur_col != ss:
                res += 1
        return res
```
