---
date: 2024-10-12
difficulty: Medium
num: 8
related_topics:
  - String
return: Done
---

# Problem: 8. String To Integer (Atoi)

## Description
same with overflow

## Approach / Thoughts
parse sign and first digits, strip leading 0 and handle overflow

## Solution
```python
class Solution:
    def myAtoi(self, s: str) -> int:
        s = s.strip()
        if not s:
            return 0

        i, sign = 0, 1
        if s.startswith('-'):
            i += 1
            sign = -1
        elif s.startswith('+'):
            i += 1

        res = []
        while i < len(s) and s[i].isdigit():
            res.append(s[i])
            i += 1

        ans = ''.join(res).lstrip('0') or 0
        num = int(ans) * sign

        if num < -(1 << 31):
            return -(1 << 31)
        if num > (1 << 31) - 1:
            return (1 << 31) - 1
        return num 
```
