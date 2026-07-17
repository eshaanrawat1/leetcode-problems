---
date: 2024-02-17
difficulty: Medium
num: 1642
related_topics:
  - Array
  - Greedy
  - Heap (Priority Queue)
return: Review
---

# Problem: 1642. Furthest Building You Can Reach

## Description
Given ladders and bricks what is the furthest building you can reach (0 indexed).

## Approach / Thoughts
Use all bricks and store max heights in a max heap.

If we run out of bricks and still have ladders left, use a ladder retroactively and add the bricks.

If ladders ever run out, return the current index building

If we never run out, return index of last building

## Solution
```python
class Solution:
    def furthestBuilding(self, heights: List[int], bricks: int, ladders: int) -> int:
        heap = []
        for i in range(len(heights) - 1):
            diff = heights[i+1] - heights[i]

            if diff <= 0:
                continue 

            heapq.heappush(heap, -1 * diff)
            bricks -= diff

            if bricks < 0:
                if ladders == 0:
                    return i 
                
                ladders -= 1
                bricks += -1 * heapq.heappop(heap)
        return len(heights) - 1
```
