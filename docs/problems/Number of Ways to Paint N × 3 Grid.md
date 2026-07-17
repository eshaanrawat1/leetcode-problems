---
date: 2025-05-20
difficulty: Hard
num: 1411
related_topics:
  - Dynamic Programming
return: Review
---

# Problem: 1411. Number Of Ways To Paint N × 3 Grid

## Description

## Approach / Thoughts
store each previous row as a bitmask, can do since length of row is 3

generate every possible valid pattern for 1 row, check against prev row to make sure there are no same touching colors

## Solution
```python
class Solution:
    def numOfWays(self, n: int) -> int:
        MOD = (10 ** 9 + 7)

        # r = 01
        # y = 10
        # g = 11

        colors = {"01", "10", "11"}
        patterns = []

        def make_patterns(i, cur):
            if i >= 3:
                patterns.append(int(cur, 2))
                return

            prev_color = cur[-2] + cur[-1] if cur else "00"
            for c in colors:
                if c != prev_color:
                    make_patterns(i+1, cur + c)

        make_patterns(0, "")


        def check_adj(p1, p2):
            c1 = p1 & 3
            c2 = (p1 >> 2) & 3
            c3 = (p1 >> 4) & 3

            c4 = p2 & 3
            c5 = (p2 >> 2) & 3
            c6 = (p2 >> 4) & 3

            if (c1 == c4) or (c2 == c5) or (c3 == c6):
                return False

            return True
            

        @lru_cache(None)
        def dfs(prev, i):
            if i >= n:
                return 1

            res = 0
            for p in patterns:
                if check_adj(p, prev):
                    res += dfs(p, i+1)
            return res % MOD


        return dfs(0, 0)
```
