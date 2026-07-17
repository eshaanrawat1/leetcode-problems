---
date: 2024-10-05
difficulty: Medium
num: 3301
related_topics:
  - Array
  - Greedy
  - Sorting
return: Done
---

# Problem: 3301. Maximize The Total Height Of Unique Towers

## Description

## Approach / Thoughts
find values needed to change, check if possible

## Solution
```python
class Solution:
    def maximumTotalSum(self, maximumHeight: List[int]) -> int:
        pq = maximumHeight[:]
        heapq.heapify(pq)

        used = set()
        need_to_change = []
        
        cur_sum = 0
        while pq:
            val = heapq.heappop(pq)

            if val not in used:
                cur_sum += val
                used.add(val)
            else:
                need_to_change.append(val)

        if not need_to_change:
            return cur_sum
            
        need_to_change.sort()
        index = need_to_change[-1] - 1

        while need_to_change:
            index = min(index, need_to_change[-1])
            while index in used:
                index -= 1

            if index == 0:
                return -1

            cur_sum += index
            used.add(index)
            need_to_change.pop()

        return cur_sum 
```
