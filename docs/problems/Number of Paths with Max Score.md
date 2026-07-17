---
date: 2024-11-26
difficulty: Hard
num: 1301
related_topics:
  - Array
  - Dynamic Programming
  - Matrix
return: Review
---

# Problem: 1301. Number Of Paths With Max Score

## Description

## Approach / Thoughts
dfs with max score, keep track of second return val for num paths

## Solution
```python
class Solution:
    def pathsWithMaxScore(self, board: List[str]) -> List[int]:
        
        @lru_cache(None)
        def dfs(r, c):
            if r == 0 and c == 0:
                return (0, 1)
            if r < 0 or c < 0 or board[r][c] == 'X':
                return (float("-inf"), float("-inf"))

            val = int(board[r][c]) if board[r][c] != 'S' else 0
            cnt = Counter()
            
            for x, y in [(r-1, c), (r, c-1), (r-1, c-1)]:
                k, v = dfs(x, y)
                cnt[k] += v
            x, y = max(cnt.items())
            return (val + x, y)

        N, mod = len(board), 10 ** 9 + 7
        x, y = dfs(N-1, N-1)
        return [x % mod, y % mod] if x != float("-inf") else [0, 0]
```
