---
date: 2024-01-23
difficulty: Medium
num: 71
related_topics:
  - Stack
  - String
return: Done
---

# Problem: 71. Simplify Path

## Description
Simplify a Unix path given a string

## Approach / Thoughts
Use an array to split the path to get an array without slashes

- if single dot or empty index, move on

- if double dots and valid, pop

- else append

## Solution
```python
class Solution:
    def simplifyPath(self, path: str) -> str:
        paths = path.split('/')
        stack = []
        symbols = ['/', '.', '', '..']

        for ch in paths:
            if stack and ch == '..':
                stack.pop()
            else:
                if ch in symbols:
                    continue
                else:
                    stack.append(ch)
        return '/' + '/'.join(stack)
```
