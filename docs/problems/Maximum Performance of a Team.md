---
date: 2024-09-10
difficulty: Hard
num: 1383
related_topics:
  - Array
  - Greedy
  - Heap (Priority Queue)
  - Sorting
return: Done
---

# Problem: 1383. Maximum Performance Of A Team

## Description
same as max subsequence score

## Approach / Thoughts
get decreasing by multipliers

when we have a min multiplier, be greedy have k

get larger sum for same multiplier

## Solution
```python
class Solution:
    def maxPerformance(self, n: int, speed: List[int], efficiency: List[int], k: int) -> int:
        res = cur_sum = 0
        pq = []

        for amt, mult in sorted(list(zip(speed, efficiency)), key=lambda x:-x[1]):
            cur_sum += amt
            heapq.heappush(pq, amt)

            if len(pq) > k:
                cur_sum -= pq[0]
                heapq.heappop(pq)

            res = max(res, cur_sum * mult)
        return res % (10 ** 9 + 7)
```
