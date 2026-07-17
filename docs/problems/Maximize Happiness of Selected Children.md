---
date: 2024-05-08
difficulty: Medium
num: 3075
related_topics:
  - Array
  - Greedy
  - Sorting
return: Done
---

# Problem: 3075. Maximize Happiness Of Selected Children

## Description
maximize happiness

## Approach / Thoughts
max heap and account for happiness decrement and 0

## Solution
```python
class Solution:
    def maximumHappinessSum(self, happiness: List[int], k: int) -> int:
        heap_list = [-h for h in happiness]
        heapq.heapify(heap_list)

        total = dec = 0
        for i in range(k):
            cur_happy = heapq.heappop(heap_list) * -1
            cur_happy -= dec

            total += max(cur_happy, 0)
            dec += 1
        return total
```
