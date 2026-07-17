---
date: 2024-09-13
difficulty: Medium
num: 2419
related_topics:
  - Array
  - Bit Manipulation
  - Brainteaser
return: Done
---

# Problem: 2419. Longest Subarray With Maximum Bitwise And

## Description

## Approach / Thoughts
max bitwise and is just the max element

find longest seq of max element

## Solution
```python
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        res = max(nums) 

        i = max_len = 0
        while i < len(nums):
            j = i
            while j < len(nums) and nums[j] == res:
                j += 1
            max_len = max(max_len, j - i)
            i = j + 1
        return max_len
```
