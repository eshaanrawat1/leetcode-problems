---
date: 2024-09-04
difficulty: Medium
num: 97
related_topics:
  - Dynamic Programming
  - String
return: Done
---

# Problem: 97. Interleaving String

## Description
check if a + b interleave = c

## Approach / Thoughts
check all cases similar to lcs

if both match, one match, no match

## Solution
```python
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:

        @cache
        def dfs(i, j, k):
            if i == len(s1) and j == len(s2) and k == len(s3):
                return True

            if i == len(s1):
                return s2[j:] == s3[k:]
            if j == len(s2):
                return s1[i:] == s3[k:]

            # no match
            if s1[i] != s3[k] and s2[j] != s3[k]:
                return False

            # both match
            if s1[i] == s3[k] and s2[j] == s3[k]:
                return dfs(i + 1, j, k + 1) or dfs(i, j + 1, k + 1)

            # one match
            if s1[i] == s3[k]:
                return dfs(i + 1, j, k + 1)
            
            if s2[j] == s3[k]:
                return dfs(i, j + 1, k + 1)
                
        if len(s1) + len(s2) != len(s3):
            return False
        return dfs(0, 0, 0)
```
