---
date: 2024-05-31
difficulty: Easy
num: 3110
related_topics:
  - String
return: Done
---

# Problem: 3110. Score Of A String

## Description
find sum of adjacent ascii characters

## Approach / Thoughts
iterate and count

## Solution
```python
class Solution:
    def scoreOfString(self, s: str) -> int:
        total = 0
        for i in range(1, len(s)):
            total += abs(ord(s[i]) - ord(s[i-1]))
        return total
```
