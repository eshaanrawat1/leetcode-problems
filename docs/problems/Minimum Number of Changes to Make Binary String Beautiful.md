---
date: 2024-11-04
difficulty: Medium
num: 2914
related_topics:
  - String
return: Done
---

# Problem: 2914. Minimum Number Of Changes To Make Binary String Beautiful

## Description
make all even length substring equal characters

## Approach / Thoughts
wlog fix adjacent characters

## Solution
```python
class Solution:
    def minChanges(self, s: str) -> int:
        total = 0
        for i in range(0, len(s), 2):
            total += (s[i] != s[i+1])
        return total
```
