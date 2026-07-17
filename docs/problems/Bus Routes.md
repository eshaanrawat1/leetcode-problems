---
date: 2024-10-03
difficulty: Hard
num: 815
related_topics:
  - Array
  - BFS
  - Hash Table
return: Review
---

# Problem: 815. Bus Routes

## Description

## Approach / Thoughts
bfs based on bus stops

first iteration is all we can reach in 1 stop, next need to take more bus

## Solution
```python
class Solution:
    def numBusesToDestination(self, routes: List[List[int]], source: int, target: int) -> int:
        if source == target:
            return 0
        
        stop_to_bus = defaultdict(list)
        for i, route in enumerate(routes):
            for stop in route:
                stop_to_bus[stop].append(i)

        q = deque([[source, 0]])
        seen_stop = {source}
        seen_route = set()

        while q:
            cur_stop, num_bus = q.popleft()
            if cur_stop == target:
                return num_bus

            for route_index in stop_to_bus[cur_stop]:
                if route_index not in seen_route:
                    seen_route.add(route_index)
                    for next_stop in routes[route_index]:
                        if next_stop not in seen_stop:
                            seen_stop.add(next_stop)
                            q.append([next_stop, num_bus+1])
        return -1
```
