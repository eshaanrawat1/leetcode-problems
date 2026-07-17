---
date: 2024-07-02
difficulty: Medium
num: 1129
related_topics:
  - BFS
  - Graph
return: Done
---

# Problem: 1129. Shortest Path With Alternating Colors

## Description

## Approach / Thoughts
bfs for shortest path, keep track of alternating

## Solution
```python
class Solution:
    def shortestAlternatingPaths(self, n: int, redEdges: List[List[int]], blueEdges: List[List[int]]) -> List[int]:
        red_adj = defaultdict(list)
        blue_adj = defaultdict(list)

        for src, dest in redEdges:
            red_adj[src].append(dest)
        for src, dest in blueEdges:
            blue_adj[src].append(dest)

        def bfs(node, target):
            q = deque([[0, 0, None]])
            red_visit = set()
            blue_visit = set()

            while q:
                cur, dist, color = q.popleft()
                if cur == target:
                    return dist

                if color != 'red' and cur not in red_visit:
                    for nei in red_adj[cur]:
                        q.append([nei, dist+1, 'red'])
                    red_visit.add(cur)
                if color != 'blue' and cur not in blue_visit:
                    for nei in blue_adj[cur]:
                        q.append([nei, dist+1, 'blue'])
                    blue_visit.add(cur)
            return -1

        ans = [-1] * n
        for i in range(n):
            ans[i] = bfs(0, i)
        return ans
```
