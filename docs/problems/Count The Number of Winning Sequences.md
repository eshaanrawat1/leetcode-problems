---
date: 2026-01-21
difficulty: Hard
num: 3320
related_topics:
  - Dynamic Programming
  - String
return: Done
---

# Problem: 3320. Count The Number Of Winning Sequences

## Description
same, rock paper scissors but no consecutive moves

have all opponent moves, number of winning sequences

## Approach / Thoughts
dp + early prune for no possible win and guarantee win

## Solution
```python
class Solution:
    def countWinningSequences(self, s: str) -> int:
        n = len(s)
        mod = 10**9+7

        @lru_cache(None)
        def dfs(i, prev, pts):
            if i >= n:
                return 1 if pts > 0 else 0

            if pts < 0 and n - i <= abs(pts):
                return 0
            if pts > 0 and n - i < pts:
                return pow(2, n-i)

            ma = s[i]
            win = draw = loss = 0

            if ma == 'F':
                if prev != 'W': win = dfs(i+1, 'W', pts+1)
                if prev != 'F': draw = dfs(i+1, 'F', pts)
                if prev != 'E': loss = dfs(i+1, 'E', pts-1)

            elif ma == 'W':
                if prev != 'E': win = dfs(i+1, 'E', pts+1) 
                if prev != 'W': draw = dfs(i+1, 'W', pts)
                if prev != 'F': loss = dfs(i+1, 'F', pts-1)

            else:
                if prev != 'F': win = dfs(i+1, 'F', pts+1)
                if prev != 'E': draw = dfs(i+1, 'E', pts)
                if prev != 'W': loss = dfs(i+1, 'W', pts-1)
            
            return (win + draw + loss) % mod

        return dfs(0, None, 0) % mod
```
