---
date: 2024-06-23
difficulty: Medium
num: 1438
related_topics:
  - Array
  - Heap (Priority Queue)
  - Monotonic Queue
  - Ordered Set
  - Queue
  - Sliding Window
return: Done
---

# Problem: 1438. Longest Continuous Subarray With Absolute Diff Less Than Or Equal To Limit

## Description

## Approach / Thoughts
have two queues maxq and minq, monotonic increase and decrease

track where subarray is valid

## Solution
```python
class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        result = 0
        minq, maxq = deque([]), deque([])

        l = 0
        for r in range(len(nums)):
            while maxq and nums[r] > nums[maxq[-1]]:
                maxq.pop()
            maxq.append(r)

            while minq and nums[r] < nums[minq[-1]]:
                minq.pop()
            minq.append(r)

            while abs(nums[maxq[0]] - nums[minq[0]]) > limit:
                l += 1
                while maxq[0] < l:
                    maxq.popleft()
                while minq[0] < l:
                    minq.popleft()
                

            if abs(nums[maxq[0]] - nums[minq[0]]) <= limit:
                result = max(result, r - l + 1)

        return result
```
