---
date: 2025-05-20
difficulty: Hard
num: 1931
related_topics:
  - Dynamic Programming
return: Done
---

# Problem: 1931. Painting A Grid With Three Different Colors

## Description
same as nx3, but up to 5

## Approach / Thoughts
generate all possible patterns, use dfs

## Solution
```python
class Solution:
    def colorTheGrid(self, m: int, n: int) -> int:
        MOD = (10 ** 9 + 7)

        colors = {"01", "10", "11"}
        patterns = []

        def make_patterns(i, cur):
            if i >= m:
                patterns.append(int(cur, 2))
                return

            prev_color = cur[-2] + cur[-1] if cur else "00"
            for c in colors:
                if c != prev_color:
                    make_patterns(i+1, cur + c)

        make_patterns(0, "")
        L = len(patterns)


        def check_adj(p1, p2):
            colors_one = [(p1 >> (2 * i)) & 3 for i in range(m)]
            colors_two = [(p2 >> (2 * i)) & 3 for i in range(m)]

            for c1, c2 in zip(colors_one, colors_two):
                if c1 == c2:
                    return False
            return True

        is_adj = defaultdict(set)
        for i in range(L):
            for j in range(i+1, L):
                p1 = patterns[i]
                p2 = patterns[j]
                if check_adj(p1, p2):
                    is_adj[p1].add(p2)
                    is_adj[p2].add(p1)
            

        
        dp = [[-1] * L for _ in range(n)]

        def dfs(i, prev_idx):
            if i >= n:
                return 1

            if dp[i][prev_idx] != -1:
                return dp[i][prev_idx]

            res = 0
            for p_idx, p in enumerate(patterns):
                if patterns[prev_idx] in is_adj[p]:
                    res = (res + dfs(i+1, p_idx)) % MOD

            dp[i][prev_idx] = res % MOD
            return res % MOD

        ans = 0
        for i in range(L):
            ans = (ans + dfs(1, i)) % MOD
        return ans % MOD
```
