---
date: 2024-05-21
difficulty: Medium
num: 131
related_topics:
  - Backtracking
  - Dynamic Programming
  - String
return: Review
---

# Problem: 131. Palindrome Partitioning

## Description

## Approach / Thoughts
find all substrings and do checks

## Solution
```python
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        result = []

        def dfs(s, path):
            if not s:
                result.append(path[:])
                return
            
            for i in range(1, len(s)+1):
                if s[:i] == s[i-1::-1]:
                    path.append(s[:i])
                    dfs(s[i:], path)
                    path.pop()
        
        dfs(s, [])
        return result
```
