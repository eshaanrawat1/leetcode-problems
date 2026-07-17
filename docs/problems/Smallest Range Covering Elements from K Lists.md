---
date: 2024-06-20
difficulty: Hard
num: 632
related_topics:
  - Array
  - Greedy
  - Hash Table
  - Heap (Priority Queue)
  - Sliding Window
  - Sorting
return: Review
---

# Problem: 632. Smallest Range Covering Elements From K Lists

## Description
find smallest range that contains elements in all lists

## Approach / Thoughts
heap with left bound and right bounds which automatically keep track

left bound is heappush which is smallest

right bound is max of all elements in the heap

increment and keep track of right max

## Solution
```python
class Solution:
    def smallestRange(self, nums: List[List[int]]) -> List[int]:
        pq = [(row[0], index, 0) for index, row in enumerate(nums)]
        heapq.heapify(pq)

        ans = [float("-inf"), float("inf")]
        right = max([row[0] for row in nums])
        while pq:
            left, i, j = heapq.heappop(pq)
            if right - left < ans[1] - ans[0]:
                ans = [left, right]
            if j+1 == len(nums[i]):
                break
            tmp = nums[i][j+1]
            right = max(tmp, right)

            heapq.heappush(pq, (tmp, i, j+1))
        return ans
```
