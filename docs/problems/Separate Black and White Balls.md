---
date: 2024-10-14
difficulty: Medium
num: 2938
related_topics:
  - Greedy
  - String
  - Two-Pointer
return: Done
---

# Problem: 2938. Separate Black And White Balls

## Description
min number of swaps to put black balls on the right

## Approach / Thoughts
find number of zeroes we need, keep track of one indices

greedy swap, doesn’t matter order

## Solution
```python
class Solution:
    def minimumSteps(self, s: str) -> int:
        need = s.count('1')

        stack = []
        for i in range(len(s)-need):
            if s[i] == '1':
                stack.append(i)
        
        res = 0
        for i in range(len(s)-need, len(s)):
            if s[i] == '0':
                res += (i - stack.pop())
        return res
```
