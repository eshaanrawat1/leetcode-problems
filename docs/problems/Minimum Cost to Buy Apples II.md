---
date: 2026-05-11
difficulty: Hard
num: 3928
related_topics:
  - 
return:
---

# Problem: 3928. Minimum Cost to Buy Apples II

## Description
You are given an integer `n` and an integer array `prices` of length `n`, where `prices[i]` is the price of apples at shop `i`.

You are also given a 2D integer array `roads`, where `roads[i] = [ui, vi, costi, taxi]` represents a **bidirectional** road:

	`ui` and `vi` are the shops connected by the road.

	`costi` is the cost to travel the road **without** carrying apples.

	`taxi` is the multiplier applied to `costi` when traveling **with** apples.

For each shop `i`, you can either:

	Buy apples locally at shop `i` for `prices[i]`.

	Travel **empty** to any shop `j` using **any** number of roads, buy apples for `prices[j]`, and return to shop `i` while carrying apples, paying `cost * tax` on each road used for the return trip.

The forward path, where you travel empty, and the return path may be **different**.

Return an integer array `ans` of length `n`, where `ans[i]` is the **minimum** total cost to buy apples starting from shop `i`.

## Approach / Thoughts
[[Weekly Contest 501]]

dijkstra both ways i-j is free and j-i is tax

## Solution
```python
class Solution:
    def minCost(self, n: int, prices, roads):

        adj_free = defaultdict(list)
        adj_tax = defaultdict(list)

        for s, d, c, t in roads:
            adj_free[s].append((d, c))
            adj_free[d].append((s, c))

            adj_tax[s].append((d, c*t))
            adj_tax[d].append((s, c*t))
            

        def dijkstra(src, adj):
            pq = [[0, src]]
            
            shortest = [inf] * n
            shortest[src] = 0
            
            while pq:
                d1, n1 = heapq.heappop(pq)
                for n2, d2 in adj[n1]:
                    if d1+d2 < shortest[n2]:
                        shortest[n2] = d1+d2
                        heapq.heappush(pq, (d1+d2, n2))
            return shortest

        free = [dijkstra(i, adj_free) for i in range(n)]
        tax = [dijkstra(i, adj_tax) for i in range(n)]

        res = []
        for i in range(n):
            min_cost = prices[i]
            for j in range(n):
                if i == j:
                    continue
                min_cost = min(
                    min_cost,
                    prices[j] + free[i][j] + tax[j][i]
                )
            res.append(min_cost)
        return res
```