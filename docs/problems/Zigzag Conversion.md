---
date: 2024-08-10
difficulty: Medium
num: 6
related_topics:
  - String
return: Done
---

# Problem: 6. Zigzag Conversion

## Description

## Approach / Thoughts
follow pattern handle edge cases

## Solution
```python
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        S = len(s)
        res = [[''] * S for _ in range(numRows)]

        if numRows == 1:
            return s
        
        i = r = c = 0
        while i < S:
            for j in range(numRows):
                if i >= S:
                    break
                res[r][c] = s[i]
                r, i = r+1, i+1

            r -= 2
            c += 1

            for j in range(numRows-2):
                if i >= S:
                    break
                res[r][c] = s[i]
                r, c, i = r-1, c+1, i+1

        ans = ""
        for r in res:
            ans += ''.join(r)
        return ans
```
