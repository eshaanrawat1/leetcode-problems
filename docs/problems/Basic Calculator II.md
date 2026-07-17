---
date: 2024-07-02
difficulty: Medium
num: 227
related_topics:
  - Math
  - Stack
  - String
return: Done
---

# Problem: 227. Basic Calculator Ii

## Description
same basic calculator no parenthesis

## Approach / Thoughts
keep track of mult and div

## Solution
```python
class Solution:
    def calculate(self, s: str) -> int:
        stack = []

        i = 0
        sub = div = prod = False
        while i < len(s):
            if s[i].isdigit():
                num = 0
                while i < len(s) and s[i].isdigit():
                    num = num * 10 + int(s[i])
                    i += 1
                if sub:
                    stack.append(-num)
                    sub = False
                elif prod:
                    stack[-1] *= num
                    prod = False
                elif div:
                    if stack[-1] < 0 and stack[-1] % num != 0:
                        stack[-1] = (stack[-1] // num + 1)
                    else:
                        stack[-1] //= num
                    div = False
                else:
                    stack.append(num)
                continue
            if s[i] == '-':
                sub = True
            if s[i] == '*':
                prod = True
            if s[i] == '/':
                div = True
            i += 1
        return sum(stack)
```
