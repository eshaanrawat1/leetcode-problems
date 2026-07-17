---
date: 2024-09-21
difficulty: Hard
num: 440
related_topics:
  - Trie
return: Review
---

# Problem: 440. K Th Smallest In Lexicographical Order

## Description

## Approach / Thoughts
simulate tree dfs for lexicographic order

check for each point, do we have < k, if so move to next branch

otherwise go deeper

## Solution
```python
class Solution:
    def findKthNumber(self, n: int, k: int) -> int:
        res = 1
        k -= 1

        while k > 0:
            cnt = 0
            interval = [res, res+1]

            while interval[0] <= n:
                cnt += min(n+1, interval[1]) - interval[0]
                interval = [10*interval[0], 10*interval[1]]

            if k >= cnt:
                res += 1
                k -= cnt
            else:
                k -= 1
                res *= 10

        return res
```
