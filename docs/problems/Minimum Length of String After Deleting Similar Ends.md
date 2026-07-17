---
date: 2024-03-04
difficulty: Medium
num: 1750
related_topics:
  - String
  - Two-Pointer
return: Done
---

# Problem: 1750. Minimum Length Of String After Deleting Similar Ends

## Description
Delete a one character suffix and prefix until we can’t anymore

## Approach / Thoughts
Strip on each iteration of each of the same element

## Solution
```python
class Solution:
    def minimumLength(self, s: str) -> int:
        while len(s) > 1 and s[0] == s[-1]:
            s = s.strip(s[0])
        return len(s)
```
