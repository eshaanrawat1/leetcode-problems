---
date: 2025-03-26
difficulty: Medium
num: 915
related_topics:
  - Array
return: Done
---

# Problem: 915. Partition Array Into Disjoint Intervals

## Description
same, every element in left is ≤ every element in right

## Approach / Thoughts
keep track of max element in left, min element in right

## Solution
```python
class Solution:
    def partitionDisjoint(self, nums: List[int]) -> int:
        rfreq = Counter(nums)
        max_lval = -inf

        rvals = nums[:]
        heapq.heapify(rvals)

        for i, n in enumerate(nums):
            rfreq[n] -= 1
            max_lval = max(max_lval, n)

            while rvals and rfreq[rvals[0]] == 0:
                heapq.heappop(rvals)

            if rvals and max_lval <= rvals[0]:
                return i+1
        return -1
```
