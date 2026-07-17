---
date: 2026-02-25
difficulty: Medium
num: 3529
related_topics:
  - Array
  - Hash Function
  - Matrix
  - Rolling Hash
  - Staff
  - String
  - String Matching
return: Done
---

# Problem: 3529. Count Cells In Overlapping Horizontal And Vertical Substrings

## Description

## Approach / Thoughts
rolling hash match fixed size

## Solution
```python
class Solution:
    def countCells(self, grid: List[List[str]], pattern: str) -> int:
        m, n = len(grid), len(grid[0])
        plen = len(pattern)

        mod = 10**9+7
        base = 131 

        phash = 0
        for i in range(plen):
            phash = (phash * base + ord(pattern[i])) % mod

        hmap = {}
        vmap = {}

        cnt = 0
        for i in range(m):
            for j in range(n):
                hmap[cnt] = (i, j)
                cnt += 1

        cnt = 0
        for j in range(n):
            for i in range(m):
                vmap[cnt] = (i, j)
                cnt += 1


        def calc(grid, m, n):
            s = ''.join(''.join(row) for row in grid)

            rh = [0] * (m*n)
            rh[0] = ord(s[0])

            pows = [1] * (m*n)
            for i in range(1, m*n):
                rh[i] = (rh[i-1] * base + ord(s[i])) % mod
                pows[i] = (pows[i-1] * base) % mod

            ps = [0] * (m*n+1)
            if rh[plen-1] == phash:
                ps[0] = 1
                ps[plen] = -1

            for i in range(plen, m*n):
                cur = (rh[i] - rh[i-plen] * pows[plen]) % mod
                if cur == phash:
                    ps[i-plen+1] += 1
                    ps[i+1] += -1
            
            cur = 0
            have = set()

            for i in range(m*n):
                cur += ps[i]
                if cur > 0:
                    have.add(i)
            return have


        trsp = [[grid[i][c] for i in range(m)] for c in range(n)]
        
        res = calc(grid, m, n)
        trsp_res = calc(trsp, n, m)

        return len({hmap[x] for x in res} & {vmap[x] for x in trsp_res})
                
```
