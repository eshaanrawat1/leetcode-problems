---
date: 2025-11-13
difficulty: Medium
num: 3228
related_topics:
  - Counting
  - Greedy
  - String
return: Done
---

# Problem: 3228. Maximum Number Of Operations To Move Ones To The End

## Description

## Approach / Thoughts
group continuous zeros

for each 1, number of 0 groups to the right

## Solution
```python
class Solution:
    def maxOperations(self, s: str) -> int:
        res = 0
    
        stack = []
        for c in s:
            if c == '0' and stack and stack[-1] == '0':
                continue
            else:
                stack.append(c)
        s = ''.join(stack)
        
        zero = 0
        n = len(s)
        for i in range(n-1, -1, -1):
            if s[i] == '0':
                zero += 1
            else:
                res += zero
        return res
```
