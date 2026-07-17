---
date: 2024-01-30
difficulty: Easy
num: 3019
related_topics:
  - String
return: Done
---

# Problem: 3019. Number Of Changing Keys

## Description
Find if adjacent keys are different

## Approach / Thoughts
Iterate through and check pairs of adjacent letters, case-insensitive

## Solution
```python
class Solution:
    def countKeyChanges(self, s: str) -> int:
        cnt = 0
        for i in range(1, len(s)):
            if s[i].lower() != s[i-1].lower():
                cnt += 1
        return cnt
```
