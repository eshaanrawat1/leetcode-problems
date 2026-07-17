---
date: 2024-09-17
difficulty: Medium
num: 72
related_topics:
  - Dynamic Programming
  - String
return: Done
---

# Problem: 72. Edit Distance

## Description

## Approach / Thoughts
check all operations

## Solution
```python
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        
        @cache
        def dfs(i, j):
            if i >= len(word1):
                return len(word2) - j
            if j >= len(word2):
                return len(word1) - i

            if j < len(word2) and word1[i] == word2[j]:
                return dfs(i + 1, j + 1)

            delete = 1 + dfs(i + 1, j)
            insert = 1 + dfs(i, j + 1)
            replace = 1 + dfs(i + 1, j + 1)

            return min(delete, insert, replace)

        return dfs(0, 0)
```
