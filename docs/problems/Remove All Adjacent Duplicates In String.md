---
date: 2024-01-14
difficulty: Easy
num: 1047
related_topics:
  - Stack
  - String
return: Done
---

# Problem: 1047. Remove All Adjacent Duplicates In String

## Description
Same as problem title.

abbaca = ca

## Approach / Thoughts
Use a stack, if letter at index is the same as last element in stack, pop and move on.

## Solution
```python
class Solution:
    def removeDuplicates(self, s: str) -> str:
        stack = []
        for ch in s:
            if stack and ch == stack[-1]:
                stack.pop()
            else:
                stack.append(ch)
        return "".join(stack)
```
