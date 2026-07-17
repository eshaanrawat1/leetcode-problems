---
date: 2026-05-29
difficulty: Hard
num: 1444
related_topics:
  - Array
  - Dynamic Programming
  - Memoization
  - Matrix
  - Prefix Sum
return:
---

# Problem: 1444. Number of Ways of Cutting a Pizza

## Description
Given a rectangular pizza represented as a `rows x cols` matrix containing the following characters: `'A'` (an apple) and `'.'` (empty cell) and given the integer `k`. You have to cut the pizza into `k` pieces using `k-1` cuts. 

For each cut you choose the direction: vertical or horizontal, then you choose a cut position at the cell boundary and cut the pizza into two pieces. If you cut the pizza vertically, give the left part of the pizza to a person. If you cut the pizza horizontally, give the upper part of the pizza to a person. Give the last piece of pizza to the last person.

*Return the number of ways of cutting the pizza such that each piece contains **at least** one apple. *Since the answer can be a huge number, return this modulo 10^9 + 7.

## Approach / Thoughts
keep track of cuts - dp 
each r,c means remove this row and everything to left / top of it
optimized version uses rectangle prefix sum for O(1) check on if a region has apples
ideally dont need to track br, rc since bottom right corner of the rectangle never moves

## Solution
```python
class Solution:
    def ways(self, pizza: List[str], k: int) -> int:
        m, n = len(pizza), len(pizza[0])
        mod = 10**9+7

        ps = [[int(x == 'A') for x in row] for row in pizza]
        for j in range(1, n):
            ps[0][j] += ps[0][j-1]

        for i in range(1, m):
            for j in range(n):
                if j == 0:
                    ps[i][j] += ps[i-1][j]
                else:
                    ps[i][j] += ps[i-1][j]
                    ps[i][j] += ps[i][j-1]
                    ps[i][j] -= ps[i-1][j-1]

        def has_apple(r1, r2, c1, c2):
            if r1 > r2 or c1 > c2:
                return 0

            tot = ps[r2][c2]
            l = r = overlap = 0
            
            if r1 != 0:
                r = ps[r1-1][c2]
            
            if c1 != 0:
                l = ps[r2][c1-1]

            if r1 != 0 and c1 != 0:
                overlap = ps[r1-1][c1-1]

            return tot - l - r + overlap
        
        @lru_cache(None)
        def dfs(tr, br, lc, rc, cnt):
            if cnt == 0:
                return 1 if has_apple(tr, br, lc, rc) else 0

            res = 0
            for c in range(lc, rc+1):
                if has_apple(tr, br, lc, c):
                    res += dfs(tr, br, c+1, rc, cnt-1) % mod

            for r in range(tr, br+1):
                if has_apple(tr, r, lc, rc):
                    res += dfs(r+1, br, lc, rc, cnt-1) % mod
            return res % mod

        return dfs(0, m-1, 0, n-1, k-1)
```