---
date: 2025-06-21
difficulty: Medium
num: 3584
related_topics:
  - Array
  - Two-Pointer
return: Done
---

# Problem: 3584. Maximum Product Of First And Last Elements Of A Subsequence

## Description

## Approach / Thoughts
keep track of possible endpoints using heaps and get max

max min pos neg heaps for pos and neg numbers

## Solution
```python
class Solution:
    def maximumProduct(self, nums: List[int], m: int) -> int:
        res, N = -inf, len(nums)

        if m == 1:
            for n in nums:
                res = max(res, abs(n))
            return res * res
        if m == N:
            return nums[0] * nums[-1]


        max_pos = []
        min_pos = []

        max_neg = []
        min_neg = []

        for i in range(N-1, m-2, -1):
            if nums[i] >= 0: 
                max_pos.append((-nums[i], i))
                min_pos.append((nums[i], i))
            if nums[i] < 0: 
                max_neg.append((nums[i], i))
                min_neg.append((-nums[i], i))

        heapq.heapify(max_pos)
        heapq.heapify(min_pos)

        heapq.heapify(max_neg)
        heapq.heapify(min_neg)

        for i, n in enumerate(nums):
            if n >= 0:
                while max_pos and max_pos[0][1] - i < m-1:
                    heapq.heappop(max_pos)
                if max_pos:
                    res = max(res, n * -max_pos[0][0])
                    continue

                while min_neg and min_neg[0][1] - i < m-1:
                    heapq.heappop(min_neg)
                if min_neg:
                    res = max(res, n * -min_neg[0][0])
                
            else:
                while max_neg and max_neg[0][1] - i < m-1:
                    heapq.heappop(max_neg)
                if max_neg:
                    res = max(res, n * max_neg[0][0])
                    continue

                while min_pos and min_pos[0][1] - i < m-1:
                    heapq.heappop(min_pos)
                if min_pos:
                    res = max(res, n * min_pos[0][0])
        return res
```
