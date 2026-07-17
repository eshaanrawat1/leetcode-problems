---
date: 2026-05-12
difficulty: Hard
num: 3924
related_topics:
  - 
return:
---

# Problem: 3924. Minimum Threshold Path With Limited Heavy Edges

## Description
There is an undirected weighted graph with `n` nodes labeled from 0 to `n - 1`.

The graph is represented by a 2D integer array `edges`, where each edge `edges[i] = [ui, vi, w​​​​​​​i]` indicates that there is an undirected edge between nodes `ui` and `vi` with weight `w​​​​​​​i`.

You are also given integers `source`, `target` and `k`.

A `threshold` value determines whether an edge is considered **light** or **heavy**:

	An edge is **light** if its weight is **less than** or **equal** to `threshold`.

	An edge is **heavy** if its weight is **greater than** `threshold`.

A path from `source` to `target` is **valid** if it contains **at most** `k` heavy edges.

Return the **minimum integer **`threshold` such that **at least** one **valid** path exists from `source` to `target`. If no such path exists, return -1.

 

**Example 1:**​​​​​​​​​​​​​​

​​​​​​​

**Input:** n = 6, edges = [[0,1,5],[1,2,3],[3,4,4],[4,5,1],[1,4,2]], source = 0, target = 3, k = 1

**Output:** 4

**Explanation:**

The minimum `threshold` such that a path from node 0 to node 3 uses at most 1 heavy edge is 4.

	Light edges: `[1, 2, 3]`, `[3, 4, 4]`, `[4, 5, 1]`, `[1, 4, 2]`

	Heavy edges: `[0, 1, 5]`

A valid path is `0 → 1 → 4 → 3`. It uses only 1 heavy edge (`[0, 1, 5]`), which satisfies the limit `k = 1`.

Any smaller `threshold` would make it impossible to reach node 3 without exceeding 1 heavy edge.

## Approach / Thoughts
[[Biweekly Contest 182]]

01 bfs + binary search

## Solution
```python
class Solution:
    def minimumThreshold(self, n: int, edges: List[List[int]], src: int, target: int, k: int) -> int:


        adj = defaultdict(list)
        for s, d, w in edges:
            adj[s].append((d, w))
            adj[d].append((s, w))


        def bfs(thresh):
            q = deque([[0, src]])
            vis = set()

            while q:
                d1, n1 = q.popleft()

                if n1 == target:
                    return True      
                if n1 in vis:
                    continue
                vis.add(n1)

                for n2, d2 in adj[n1]:
                    if d2 > thresh:
                        if d1 + 1 > k:
                            continue
                        q.append((d1+1, n2))
                    else:
                        q.appendleft((d1, n2))
            return False

        l, r = 0, 10**9+1
        res = -1

        while l <= r:
            m = (l + r) // 2
            if bfs(m):
                res = m
                r = m-1 
            else:
                l = m+1
        return res
```