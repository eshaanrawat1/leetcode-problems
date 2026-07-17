---
date: 2024-06-23
difficulty: Hard
num: 239
related_topics:
  - Array
  - Heap (Priority Queue)
  - Monotonic Stack
  - Queue
  - Sliding Window
return: Done
---

# Problem: 239. Sliding Window Maximum

## Description

## Approach / Thoughts
heap and keep track of counts

## Solution
```python
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        res = []

        pq, counts = [], defaultdict(int)
        for i in range(k):
            counts[nums[i]] += 1
            heapq.heappush(pq, -nums[i])
        res.append(-1 * pq[0])

        l = 0
        for r in range(k, len(nums)):
            heapq.heappush(pq, -nums[r])

            counts[nums[r]] += 1
            counts[nums[l]] -= 1
            l += 1

            while pq and counts[-pq[0]] == 0:
                heapq.heappop(pq)

            res.append(-1 * pq[0])
        return res     
```
