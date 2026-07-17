---
date: 2024-08-22
difficulty: Hard
num: 472
related_topics:
  - Array
  - DFS
  - Dynamic Programming
  - String
  - Trie
return: Done
---

# Problem: 472. Concatenated Words

## Description

## Approach / Thoughts
check if word break ≥ 2 for each word in list

## Solution
```python
class Solution:
    def findAllConcatenatedWordsInADict(self, words: List[str]) -> List[str]:
        matches = set(words)

        cache = {}
        def dfs(word, i, cnt):
            if i >= len(word) and cnt >= 2:
                return True 
            if (word, i) in cache:
                return cache[(word, i)]

            res = False
            for j in range(i, len(word)):
                if word[i:j+1] in matches:
                    res = res or dfs(word, j+1, cnt+1)
            
            cache[(word, i)] = res
            return res

        res = []
        for w in words:
            if dfs(w, 0, 0):
                res.append(w)
        return res
```
