---
date: 2025-06-02
difficulty: Hard
num: 1298
related_topics:
  - Array
  - BFS
  - Graph
return: Done
---

# Problem: 1298. Maximum Candies You Can Get From Boxes

## Description

## Approach / Thoughts
simulate the process

## Solution
```python
class Solution:
    def maxCandies(self, status: List[int], candies: List[int], keys: List[List[int]], containedBoxes: List[List[int]], initialBoxes: List[int]) -> int:
        
        pq = [[-status[i], i] for i in initialBoxes]
        heapq.heapify(pq)

        score = 0
        can_unlock = set()

        while pq:
            is_open, cur_box = heapq.heappop(pq)

            if is_open or cur_box in can_unlock:
                score += candies[cur_box]

                for b in containedBoxes[cur_box]:
                    heapq.heappush(pq, [-status[b], b])
                
                for k in keys[cur_box]:
                    can_unlock.add(k)

        return score
```
