---
date: 2024-07-02
difficulty: Hard
num: 224
related_topics:
  - Math
  - Recursion
  - Stack
  - String
return: Done
---

# Problem: 224. Basic Calculator

## Description
basic calculator

## Approach / Thoughts
go from back and recurse when parenthesis

## Solution
```python
class Solution:
    def calculate(self, s: str) -> int:
        stack = []

        i = len(s) - 1
        while i >= 0:
            if s[i] == ')':
                i, res = self.calculate(s[:i])
                stack.append(res)
            elif s[i] == '(':
                return [i, sum(stack)]
            elif s[i].isdigit():
                num = ""
                while i >= 0 and s[i].isdigit():
                    num = s[i] + num
                    i -= 1
                stack.append(int(num))
                continue
            elif s[i] == '-':
                stack[-1] *= -1
            i -= 1
        return sum(stack)
```
