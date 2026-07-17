---
date: 2024-06-22
difficulty: Medium
num: 1248
related_topics:
  - Array
  - Hash Table
  - Math
  - Sliding Window
return: Done
---

# Problem: 1248. Count Number Of Nice Subarrays

## Description
same, number of subarrays with k odd numbers

## Approach / Thoughts
3 pointer sliding window

## Solution
```python
class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        res = odds = 0

        l = m = 0
        for r in range(len(nums)):
            if nums[r] % 2:
                odds += 1
            
            while odds > k:
                if nums[l] % 2:
                    odds -= 1
                l += 1
                m = l

            if odds == k:
                while m < r and nums[m] % 2 == 0:
                    m += 1
                res += (m - l + 1)
        return res
```
