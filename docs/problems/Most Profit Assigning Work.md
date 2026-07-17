---
date: 2024-06-17
difficulty: Medium
num: 826
related_topics:
  - Array
  - Binary Search
  - Greedy
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 826. Most Profit Assigning Work

## Description
assign profit to workers

## Approach / Thoughts
sort workers and greedy assign

## Solution
```python
class Solution:
    def maxProfitAssignment(self, difficulty: List[int], profit: List[int], worker: List[int]) -> int:
        pairs = [(-profit[i], difficulty[i]) for i in range(len(profit))]
        pairs.sort(key=lambda x: x[0])

        total = 0
        worker.sort(reverse=True)

        for w in worker:
            while pairs and w < pairs[0][1]:
                heapq.heappop(pairs)
            if not pairs:
                break
            total += (-1 * pairs[0][0])
        return total
```
