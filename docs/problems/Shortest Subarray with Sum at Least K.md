---
date: 2024-10-16
difficulty: Hard
num: 862
related_topics:
  - Array
  - Binary Search
  - Heap (Priority Queue)
  - Monotonic Queue
  - Prefix Sum
  - Queue
  - Sliding Window
return: Review
---

# Problem: 862. Shortest Subarray With Sum At Least K

## Description

## Approach / Thoughts
monoq for best possible candidates, sliding window

## Solution
```python
class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        q = deque([[0, 0]])
        ps, res = 0, float("inf")

        for i in range(len(nums)):
            ps += nums[i]

            while q and (ps - q[0][1]) >= k:
                res = min(res, i - q.popleft()[0] + 1)
            
            while q and ps <= q[-1][1]:
                q.pop()

            q.append([i + 1, ps])
        return res if res != float("inf") else -1
```
