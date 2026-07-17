---
date: 2025-08-15
difficulty: Easy
num: 1323
related_topics:
  - Greedy
  - Math
return: Done
---

# Problem: 1323. Maximum 69 Number

## Description
can change 6 to 9 or vice versa

## Approach / Thoughts
change first 6 to 9 to maximize number

## Solution
```python
class Solution:
    def maximum69Number (self, num: int) -> int:
        s = list(str(num))
        for i, c in enumerate(s):
            if c == '6':
                return int(''.join(s[:i]) + '9' + ''.join(s[i+1:]))
        return num
```
