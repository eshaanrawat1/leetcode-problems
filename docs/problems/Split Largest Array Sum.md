---
date: 2024-06-18
difficulty: Hard
num: 410
related_topics:
  - Array
  - Binary Search
  - Dynamic Programming
  - Greedy
  - Prefix Sum
return: Done
---

# Problem: 410. Split Largest Array Sum

## Description
split array into min sum

## Approach / Thoughts
binary search for thresholds

## Solution
```python
class Solution:
    def splitArray(self, nums: List[int], k: int) -> int:
        def feasible(threshold):
            subs, current = 1, 0
            for n in nums:
                if current + n > threshold:
                    subs += 1
                    current = 0
                current += n
            return subs <= k

        l, r = max(nums), sum(nums)
        while l < r:
            m = (l + r) // 2
            if feasible(m):
                r = m
            else:
                l = m + 1
        return l
```
