---
date: 2026-01-06
difficulty: Medium
num: 880
related_topics:
  - Stack
  - String
return: Review
---

# Problem: 880. Decoded String At Index

## Description

## Approach / Thoughts
mod tricks k cycle, check length

## Solution
```python
class Solution:
    def decodeAtIndex(self, s: str, k: int) -> str:
        cur_len = 0
        for c in s:
            if c.isdigit():
                cur_len *= int(c)
            else:
                cur_len += 1

        n = len(s)
        for i in range(n-1, -1, -1):
            c = s[i]

            if c.isdigit():
                cur_len //= int(c)   
            else:
                k %= cur_len
                if k == 0 or k == cur_len:
                    return c
                cur_len -= 1
```
