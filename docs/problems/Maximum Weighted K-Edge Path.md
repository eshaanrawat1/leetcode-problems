---
date: "2026-07-02"
difficulty: "Medium"
rating: 2110
num: "3543"
related_topics:
  - "hash-table"
  - "dynamic-programming"
  - "graph-theory"
return:
---

# Problem: 3543. Maximum Weighted K-Edge Path

## Approach / Thoughts

simple dp on graph - tried a lot of things at first like brute forcing every possible combination, but that didn't work - then tried dp with two states but couldn't account for some edge cases where we might have to make a locally worse decision for global

the missed intuition for this problem was that constraints are small enough to just cache the sum as well in the state since sum < t and t < 600. if we cache all three states then each represents the best possible segment with some remaining budget almost

## Solution

```python
class Solution:
    def maxWeight(self, n: int, edges, k: int, t: int) -> int:
        # try brute force first, < 300 nodes
        # no cycles, check every path

        # WA #1 -> can be any path of length k in the graph
        # WA #2 -> tle, too many edges? maybe try some sort
        # of pruning - if edge is >= t, dont add to graph?
        # WA #3 -> same tle - maybe try precomputing all dist
        # k nodes from each other
        # WA #4 - no tle on dp, but wa on 952/959

        # wqs?
        # maybe some sort of prefix sum?
        # worst case tc of dfs, some sort of neural net
        # exponential

        # some sort of dp?
        # how many nodes are dist 1 away, dist 2 away ... k
        # dp[i][cnt]
        # the best segment starting at i, of length cnt


        adj = defaultdict(list)
        for u, v, w in edges:
            adj[u].append((v, w))


        @lru_cache(None)
        def dfs(u, cnt, cur):
            if cnt == k:
                return cur if cur < t else -inf

            res = -inf
            for v, w in adj[u]:
                if cur + w < t:
                    res = max(res, dfs(v, cnt+1, cur+w))
            return res

        res = max(dfs(i, 0, 0) for i in range(n))
        return res if res != -inf else -1
```
