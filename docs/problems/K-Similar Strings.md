---
date: 2024-10-10
difficulty: Hard
num: 854
related_topics:
  - BFS
  - String
return: Done
---

# Problem: 854. K Similar Strings

## Description
find min swaps to make similar

## Approach / Thoughts
bfs with heap, try every swap combo

## Solution
```python
class Solution:
    def kSimilarity(self, s1: str, s2: str) -> int:
        if s1 == s2:
            return 0

        pq = [[0, list(s1), 0]]
        visit = set()

        while pq:
            steps, l1, i = heapq.heappop(pq)

            if i >= len(s1):
                return steps
            if tuple(l1) in visit:
                continue
            visit.add(tuple(l1))

            if l1[i] == s2[i]:
                heapq.heappush(pq, [steps, l1, i + 1])
                visit.remove(tuple(l1))
            else:
                for j in range(i+1, len(s1)):
                    if l1[j] == s2[i]:
                        l1_copy = l1[:]
                        l1_copy[i], l1_copy[j] = l1_copy[j], l1_copy[i]
                        heapq.heappush(pq, [steps + 1, l1_copy, i + 1])
```
