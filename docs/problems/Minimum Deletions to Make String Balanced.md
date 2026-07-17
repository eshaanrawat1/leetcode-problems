---
date: 2024-07-30
difficulty: Medium
num: 1653
related_topics:
  - Dynamic Programming
  - Stack
  - String
return: Done
---

# Problem: 1653. Minimum Deletions To Make String Balanced

## Description
as before bs

## Approach / Thoughts
balance with stack, remove every ba pair

## Solution
```python
class Solution:
    def minimumDeletions(self, s: str) -> int:
        stack = []
        count = 0

        for ch in s:
            if ch == 'a' and stack and stack[-1] == 'b':
                stack.pop()
                count += 1
            else:
                stack.append(ch)
        return count
```
