---
date: 2024-05-24
difficulty: Hard
num: 140
related_topics:
  - Array
  - Backtracking
  - Dynamic Programming
  - Hash Table
  - Memoization
  - String
  - Trie
return: Done
---

# Problem: 140. Word Break Ii

## Description
find all paths of broken words

## Approach / Thoughts
backtrack check every option

## Solution
```python
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        self.available = set(wordDict)

        res, cur = [], []
        def dfs(i):
            if i == len(s):
                res.append(" ".join(cur))
                return

            for j in range(i, len(s)):
                w = s[i:j+1]
                if w in self.available:
                    cur.append(w)
                    dfs(j+1)
                    cur.pop()
        dfs(0)
        return res
            
```
