---
date: 2024-03-28
difficulty: Medium
num: 2958
related_topics:
  - Array
  - Hash Table
  - Sliding Window
return: Done
---

# Problem: 2958. Length Of Longest Subarray With At Most K Frequency

## Description
Same as problem title

## Approach / Thoughts
Sliding window

## Solution
```python
class Solution:
    def maxSubarrayLength(self, nums: List[int], k: int) -> int:
        res = l = 0

        count = defaultdict(int)
        for r in range(len(nums)):
            count[nums[r]] += 1
            while count[nums[r]] > k:
                count[nums[l]] -= 1
                l += 1

            res = max(res, r-l+1)
        return res
```
