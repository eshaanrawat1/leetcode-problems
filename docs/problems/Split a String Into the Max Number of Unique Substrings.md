---
date: 2024-10-20
difficulty: Medium
num: 1593
related_topics:
  - Backtracking
  - Hash Table
  - String
return: Done
---

# Problem: 1593. Split A String Into The Max Number Of Unique Substrings

## Description

## Approach / Thoughts
backtrack, keep track of visited strings

## Solution
```python
class Solution:
    def maxUniqueSplit(self, s: str) -> int:
        

        def dfs(i, visit):
            if i >= len(s):
                return 0

            res = 0
            for j in range(i, len(s)):
                if s[i:j+1] not in visit:
                    visit.add(s[i:j+1])
                    res = max(res, 1 + dfs(j+1, visit))
                    visit.remove(s[i:j+1])
            return res
        
        return dfs(0, set())
```
