---
date: 2024-11-02
difficulty: Easy
num: 796
related_topics:
  - String
  - String Matching
return: Done
---

# Problem: 796. Rotate String

## Description
see if rotate string can equal goal

## Approach / Thoughts
check substrings

## Solution
```python
class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        return any(s[i+1:] + s[:i+1] == goal for i in range(len(s)))
```
