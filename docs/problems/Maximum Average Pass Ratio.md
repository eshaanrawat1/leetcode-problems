---
date: 2024-12-14
difficulty: Medium
num: 1792
related_topics:
  - Array
  - Greedy
  - Heap (Priority Queue)
return: Done
---

# Problem: 1792. Maximum Average Pass Ratio

## Description
same, add students to increase average

## Approach / Thoughts
heap with max possible gain

## Solution
```python
class Solution:
    def maxAverageRatio(self, classes: List[List[int]], extraStudents: int) -> float:
        pq = [ [x/y - (x+1)/(y+1), x, y] for x, y in classes ]
        heapq.heapify(pq)

        while extraStudents:
            gain, x, y = heapq.heappop(pq)
            x, y = x + 1, y + 1

            gain = x/y - (x+1)/(y+1)
            heapq.heappush(pq, [gain, x, y])
            extraStudents -= 1

        return sum(x/y for _,x,y in pq) / len(pq)
```
