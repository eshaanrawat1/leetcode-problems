---
date: 2024-09-23
difficulty: Medium
num: 2359
related_topics:
  - DFS
  - Graph
return: Done
---

# Problem: 2359. Find Closest Node To Given Two Nodes

## Description
same with some extra steps

## Approach / Thoughts
bfs for shortest paths

for each node find min distance

## Solution
```python
class Solution:
    def closestMeetingNode(self, edges: List[int], node1: int, node2: int) -> int:
        adj = defaultdict(list)
        for i, n in enumerate(edges):
            if n != -1:
                adj[i].append(n)

        def shortest_path(src):
            q = deque([[0, src]])
            shortest = {}

            while q:
                steps, cur = q.popleft()
                if cur in shortest:
                    continue
                shortest[cur] = steps

                for nei in adj[cur]:
                    q.append([steps+1, nei])

            return shortest

        paths1 = shortest_path(node1)
        paths2 = shortest_path(node2)

        idx = res = float("inf")
        d1 = d2 = float("inf")

        for i in range(len(edges)):
            d1 = paths1[i] if i in paths1 else float("inf")
            d2 = paths2[i] if i in paths2 else float("inf")

            max_dist = max(d1, d2)

            if max_dist < res:
                idx = i
                res = max_dist
        return idx if res != float("inf") else -1
```
