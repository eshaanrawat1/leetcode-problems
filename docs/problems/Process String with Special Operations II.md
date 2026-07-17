---
date: 2026-01-06
difficulty: Hard
num: 3614
related_topics:
  - Simulation
  - String
return: Done
---

# Problem: 3614. Process String With Special Operations Ii

## Description

## Approach / Thoughts
same, process reverse separately

pass 1 - length

pass 2 - undo

```undefined
class Solution:
    def processStr(self, s: str, k: int) -> str:
        cur_len = 0
        for c in s:
            if c == '*':
                cur_len = max(0, cur_len-1)
            elif c == '#':
                cur_len *= 2
            elif c == '%':
                pass
            else:
                cur_len += 1

        if k < 0 or k >= cur_len:
            return "."

        n = len(s)
        for i in range(n-1, -1, -1):
            c = s[i]

            if c == '*':
                cur_len += 1
            elif c == '#':
                cur_len //= 2
                k %= cur_len
            elif c == '%':
                k = cur_len - k - 1
            else:
                cur_len -= 1
                if cur_len == 0 or cur_len == k:
                    return c
                
```

## Solution
```python
class Solution:
    def processStr(self, s: str, k: int) -> str:
        cur_len = 0
        for c in s:
            if c == '*':
                cur_len = max(0, cur_len-1)
            elif c == '#':
                cur_len *= 2
            elif c == '%':
                pass
            else:
                cur_len += 1

        if k < 0 or k >= cur_len:
            return "."

        n = len(s)
        for i in range(n-1, -1, -1):
            c = s[i]

            if c == '*':
                cur_len += 1
            elif c == '#':
                cur_len //= 2
                k %= cur_len
            elif c == '%':
                k = cur_len - k - 1
            else:
                cur_len -= 1
                if cur_len == 0 or cur_len == k:
                    return c
                
```
