---
date: 2024-04-10
difficulty: Medium
num: 402
related_topics:
  - Greedy
  - Monotonic Stack
  - Stack
  - String
return: Done
---

# Problem: 402. Remove K Digits

## Description
Remove k digits to make the smallest number

## Approach / Thoughts
Monotonic stack with greedy. Greedy remove from the left if stack[-1] > c.

## Solution
```python
class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        stack = []
        for c in num:
            while stack and k > 0 and stack[-1] > c:
                k -= 1
                stack.pop()
            stack.append(c)

        stack = stack[:len(stack)-k]
        res = ''.join(stack).lstrip('0')

        return res if res else '0'
        
```
