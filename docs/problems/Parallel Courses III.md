---
date: 2024-10-30
difficulty: Hard
num: 2050
related_topics:
  - Array
  - Dynamic Programming
  - Graph
  - Topological Sort
return: Review
---

# Problem: 2050. Parallel Courses Iii

## Description
time taken

## Approach / Thoughts
top sort and accumulate max sum for each class

## Solution
```python
class Solution:
    def minimumTime(self, n: int, relations: List[List[int]], time: List[int]) -> int:
        adj = defaultdict(list)
        in_degree = defaultdict(int)

        for src, dst in relations:
            adj[dst].append(src)
            in_degree[src] += 1

        
        q = deque([c for c in range(1, n+1) if in_degree[c] == 0])
        course_times = {c: time[c-1] for c in range(1, n+1)}

        while q:
            c1 = q.popleft()

            for c2 in adj[c1]:
                course_times[c2] = max(course_times[c2], course_times[c1] + time[c2-1])
                in_degree[c2] -= 1
                if in_degree[c2] == 0:
                    q.append(c2)
        return max(course_times.values())
```
