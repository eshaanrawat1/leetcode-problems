---
date: 2024-04-12
difficulty: Medium
num: 394
related_topics:
  - Recursion
  - Stack
  - String
return: Review
---

# Problem: 394. Decode String

## Description
Decode brackets to multiply number by nested string

## Approach / Thoughts
Stack, append to stack

## Solution
```python
class Solution:
    def decodeString(self, s: str) -> str:
        stack = []
        for i in range(len(s)):
            if s[i] != "]":
                stack.append(s[i])
            else:
                substr = ""
                while stack and stack[-1] != "[":
                    substr = stack.pop() + substr
                stack.pop()

                digits = ""
                while stack and stack[-1].isdigit():
                    digits = stack.pop() + digits
                stack.append(int(digits) * substr)
        return "".join(stack)
```
