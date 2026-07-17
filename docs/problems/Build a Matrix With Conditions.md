---
date: 2024-07-21
difficulty: Hard
num: 2392
related_topics:
  - Array
  - Graph
  - Matrix
  - Topological Sort
return: Done
---

# Problem: 2392. Build A Matrix With Conditions

## Description

## Approach / Thoughts
make valid conditions for row and col by building graphs

topo sort and build arrays

assign valid indices

## Solution
```python
class Solution:
    def buildMatrix(self, k: int, rowConditions: List[List[int]], colConditions: List[List[int]]) -> List[List[int]]:
        def topo_sort(edges):
            adj = defaultdict(list)
            in_degree = defaultdict(int)

            for src, dest in edges:
                adj[src].append(dest)
                in_degree[dest] += 1
            
            q = deque([])
            for i in range(1, k+1):
                if in_degree[i] == 0:
                    q.append(i)
                    in_degree[i] = 0

            order = []
            while q:
                cur = q.popleft()
                order.append(cur)

                for nei in adj[cur]:
                    in_degree[nei] -= 1
                    if in_degree[nei] == 0:
                        q.append(nei)

            return order if len(order) == k else []

        row_order = topo_sort(rowConditions)
        col_order = topo_sort(colConditions)

        if not row_order or not col_order:
            return []

        val_to_row = {n:i for i, n in enumerate(row_order)}
        val_to_col = {n:i for i, n in enumerate(col_order)}

        res = [[0] * k for _ in range(k)]
        for i in range(1, k+1):
            r, c = val_to_row[i], val_to_col[i]
            res[r][c] = i
        return res
```
