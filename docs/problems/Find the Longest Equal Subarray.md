---
date: 2025-01-09
difficulty: Medium
num: 2831
related_topics:
  - Array
  - Binary Search
  - Hash Table
  - Sliding Window
return: Review
---

# Problem: 2831. Find The Longest Equal Subarray

## Description

## Approach / Thoughts
same as longest character same substring but return max freq

use heap lazy eval for finding max frequency of current window

## Solution
```python
class Solution:
    def longestEqualSubarray(self, nums: List[int], k: int) -> int:
        l = res = 0
        freq = Counter()

        pq = []

        for r, n in enumerate(nums):
            freq[n] += 1
            heapq.heappush(pq, (-freq[n], n))

            while freq[pq[0][1]] != -pq[0][0]:
                heapq.heappop(pq)

            if (r - l + 1) + pq[0][0] > k:
                freq[nums[l]] -= 1
                heapq.heappush(pq, (-freq[nums[l]], nums[l]))
                l += 1

            res = max(res, -pq[0][0])
            
        return res
```
