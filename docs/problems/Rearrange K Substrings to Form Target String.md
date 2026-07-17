---
date: 2025-11-28
difficulty: Medium
num: 3365
related_topics:
  - Hash Table
  - Sorting
  - String
return: Done
---

# Problem: 3365. Rearrange K Substrings To Form Target String

## Description

## Approach / Thoughts
check if substrings match in both

## Solution
```python
class Solution:
    def isPossibleToRearrange(self, s: str, t: str, k: int) -> bool:
        n = len(s)
        x = n // k

        target = Counter(t[i:i+x] for i in range(0, n, x))
        subs = Counter(s[i:i+x] for i in range(0, n, x))

        return target == subs
```
