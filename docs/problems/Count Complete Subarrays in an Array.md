---
date: 2025-04-23
difficulty: Medium
num: 2799
related_topics:
  - Array
  - Hash Table
  - Sliding Window
return: Done
---

# Problem: 2799. Count Complete Subarrays In An Array

## Description
where distinct elements in subarray = distinct elements in array

## Approach / Thoughts
at most k - at most k-1

## Solution
```python
class Solution:
    def countCompleteSubarrays(self, nums: List[int]) -> int:
        total_unique = len(set(nums))

        def at_most(k):
            l = res = unique = 0
            have = Counter()

            for r, v in enumerate(nums):
                if have[v] == 0:
                    unique += 1
                have[v] += 1

                while unique > k:
                    have[nums[l]] -= 1
                    if have[nums[l]] == 0:
                        unique -= 1
                    l += 1
                res += (r - l + 1)
            return res

        return at_most(total_unique) - at_most(total_unique-1)
```
