---
date: 2024-12-12
difficulty: Medium
num: 2593
related_topics:
  - Array
  - Hash Table
  - Heap (Priority Queue)
  - Simulation
  - Sorting
return: Done
---

# Problem: 2593. Find Score Of An Array After Marking All Elements

## Description
remove min, mark adjacent

repeat until all marked

## Approach / Thoughts
heap lazy eval

## Solution
```python
class Solution:
    def findScore(self, nums: List[int]) -> int:
        pq = [(n, i) for i,n in enumerate(nums)]
        heapq.heapify(pq)

        score = 0
        marked = set()

        while pq:
            val, idx = heapq.heappop(pq)

            if idx not in marked:
                marked.add(idx)
                marked.add(idx+1)
                marked.add(idx-1)

                score += val
        return score
```
