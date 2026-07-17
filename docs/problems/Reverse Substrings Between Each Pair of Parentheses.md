---
date: 2024-07-11
difficulty: Medium
num: 1190
related_topics:
  - Stack
  - String
return: Done
---

# Problem: 1190. Reverse Substrings Between Each Pair Of Parentheses

## Description

## Approach / Thoughts
stack and pop reverse

## Solution
```python
class Solution:
    def reverseParentheses(self, s: str) -> str:
        stack = []

        for ch in s:
            if ch == ')':
                tmp = []
                while stack[-1] != '(':
                    tmp.append(stack.pop())
                stack.pop()
                stack.extend(tmp)
            else:
                stack.append(ch)
        return ''.join(stack)
```
