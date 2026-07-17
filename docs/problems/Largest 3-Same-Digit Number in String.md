---
date: 2024-08-14
difficulty: Easy
num: 2264
related_topics:
  - String
return: Done
---

# Problem: 2264. Largest 3 Same Digit Number In String

## Description

## Approach / Thoughts
compare 3s and get max

## Solution
```python
class Solution:
    def largestGoodInteger(self, num: str) -> str:
        res = ""
        for i in range(2, len(num)):
            if (num[i-2] == num[i-1]) and (num[i-1] == num[i]):
                res = max(res, num[i] * 3)
        return res or ""
```
