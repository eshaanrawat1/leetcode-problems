---
date: 2024-06-14
difficulty: Hard
num: 502
related_topics:
  - Array
  - Greedy
  - Heap (Priority Queue)
  - Sorting
return: Review
---

# Problem: 502. Ipo

## Description
find max profit with conditions

## Approach / Thoughts
sort pairs of profit and capital, while we have capital take max value

## Solution
```python
class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        N = len(profits)
        pairs = [(profits[i], capital[i]) for i in range(N)]
        pairs.sort(key=lambda x:x[1])

        i = 0
        totals = []
        while k > 0:  
            while i < N and w >= pairs[i][1]:
                heapq.heappush(totals, -1 * pairs[i][0])
                i += 1

            if not totals:
                break

            w += (-1 * heapq.heappop(totals))
            k -= 1
        return w
```
