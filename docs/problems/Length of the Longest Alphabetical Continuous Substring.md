---
date: 2025-01-15
difficulty: Medium
num: 2414
related_topics:
  - String
return: Done
---

# Problem: 2414. Length Of The Longest Alphabetical Continuous Substring

## Description

## Approach / Thoughts
loop and check

## Solution
```python
class Solution:
    def longestContinuousSubstring(self, s: str) -> int:
        n = len(s)
        i = res = 0

        while i < n:
            j = i + 1
            while j < n and ord(s[j]) == ord(s[j-1]) + 1:
                j += 1
            res = max(res, j - i)
            i = j
        return res
```
