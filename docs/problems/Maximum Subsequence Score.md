---
date: 2024-09-10
difficulty: Medium
num: 2542
related_topics:
  - Array
  - Greedy
  - Heap (Priority Queue)
  - Sorting
return: Review
---

# Problem: 2542. Maximum Subsequence Score

## Description
choose k indices and get max score

## Approach / Thoughts
sort in reverse order by multipliers

by greedy, keep heap of size k

score only gets worse and worse as we move down multipliers

so keep max and pop the min element from heap

## Solution
```python
class Solution:
    def maxScore(self, A: List[int], B: List[int], k: int) -> int:
        res = cur_sum = 0
        pq = []

        for amt, mult in sorted(list(zip(A, B)), key=lambda x:-x[1]):
            heapq.heappush(pq, amt)
            cur_sum += amt

            if len(pq) > k:
                cur_sum -= pq[0]
                heapq.heappop(pq)
            if len(pq) == k:
                res = max(res, cur_sum * mult)

        return res
```
