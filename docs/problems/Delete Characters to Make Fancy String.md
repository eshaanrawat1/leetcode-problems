---
date: 2024-10-31
difficulty: Easy
num: 1957
related_topics:
  - String
return: Done
---

# Problem: 1957. Delete Characters To Make Fancy String

## Description
no three consecutive characters

## Approach / Thoughts
stack, don’t add third consecutive

## Solution
```python
class Solution:
    def makeFancyString(self, s: str) -> str:
        stack = []

        for c in s:
            if len(stack) >= 2:
                if stack[-2] == stack[-1] and stack[-1] == c:
                    continue 
            stack.append(c)
        return ''.join(stack)
```
