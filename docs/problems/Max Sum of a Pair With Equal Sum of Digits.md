---
date: 2024-12-08
difficulty: Medium
num: 2342
related_topics:
  - Array
  - Hash Table
  - Heap (Priority Queue)
  - Sorting
return: Done
---

# Problem: 2342. Max Sum Of A Pair With Equal Sum Of Digits

## Description

## Approach / Thoughts
group into buckets by digit sum

## Solution
```python
class Solution:
    def maximumSum(self, nums: List[int]) -> int:
        digits = defaultdict(list)

        for n in nums:
            dig_sum = sum(int(c) for c in str(n))
            digits[dig_sum].append(-n)

        res = -1
        for d, v in digits.items():
            if len(v) > 1:
                heapq.heapify(v)
                t1 = -heapq.heappop(v)
                t2 = -heapq.heappop(v)
                res = max(res, t1 + t2)
        return res
```
