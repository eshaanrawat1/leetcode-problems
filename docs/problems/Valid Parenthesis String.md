---
date: 2024-04-06
difficulty: Medium
num: 678
related_topics:
  - Dynamic Programming
  - Greedy
  - Stack
  - String
return: Done
---

# Problem: 678. Valid Parenthesis String

## Description
Check if () is valid

## Approach / Thoughts
left and right validation

## Solution
```python
class Solution:
    def checkValidString(self, s: str) -> bool:
        o = c = 0
        for i in range(len(s)):
            o += -1 if s[i] == ')' else 1
            c += -1 if s[~i] == '(' else 1

            if o | c < 0: return False
        return True
```
