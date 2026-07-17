---
date: 2024-04-04
difficulty: Easy
num: 1544
related_topics:
  - Stack
  - String
return: Done
---

# Problem: 1544. Make The String Great

## Description
Remove all adjacent pairs of lowercase and uppercase same letters

## Approach / Thoughts
Stack

## Solution
```python
class Solution:
    def makeGood(self, s: str) -> str:
        stack = []

        for ch in s:
            if stack and abs(ord(ch) - ord(stack[-1])) == 32:
                stack.pop()
            else:
                stack.append(ch)
        return ''.join(stack)
```
