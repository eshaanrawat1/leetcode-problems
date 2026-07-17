---
date: 2024-09-22
difficulty: Medium
num: 2707
related_topics:
  - Array
  - Dynamic Programming
  - Hash Table
  - String
  - Trie
return: Done
---

# Problem: 2707. Extra Characters In A String

## Description
word break but can skip characters

## Approach / Thoughts
dp top down

## Solution
```python
class Solution:
    def minExtraChar(self, s: str, dictionary: List[str]) -> int:
        dictionary = set(dictionary)

        @cache
        def dfs(i):
            if i >= len(s):
                return 0

            res = float("inf")
            for j in range(i, len(s)):
                if s[i:j+1] in dictionary:
                    res = min(res, dfs(j+1))
                res = min(res, j - i + 1 + dfs(j+1))
            return res
        return dfs(0)
            
```
