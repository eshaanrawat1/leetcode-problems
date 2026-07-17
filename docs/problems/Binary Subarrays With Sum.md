---
date: 2024-03-13
difficulty: Medium
num: 930
related_topics:
  - Array
  - Hash Table
  - Prefix Sum
  - Sliding Window
return: Done
---

# Problem: 930. Binary Subarrays With Sum

## Description
Same as problem, find all subarray sum = goal

## Approach / Thoughts
Sliding window with count

If number is 1 our sum changes, if zero we keep track of a count from the previous subarray sum

We increment res to our count each time

## Solution
```python
class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        res = l = count = cur_sum = 0
        for r in range(len(nums)):
            cur_sum += nums[r]
            if nums[r] == 1:
                count = 0
            
            while l <= r and cur_sum >= goal:
                if cur_sum == goal:
                    count += 1
                cur_sum -= nums[l]
                l += 1
            res += count
        return res
```
