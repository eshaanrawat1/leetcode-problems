---
date: 2026-02-06
difficulty: Hard
num: 3830
related_topics:
  - Array
  - Dynamic Programming
  - Enumeration
  - Senior Staff
return: Done
---

# Problem: 3830. Longest Alternating Subarray After Removing At Most One Element

## Description

## Approach / Thoughts
dp on best end points and best start points

bridge together if removing a value

## Solution
```python
class Solution:
    def longestAlternating(self, nums: List[int]) -> int:
        n = len(nums)
        
        # length of alternating ending at i
        ul = [1] * n 
        dl = [1] * n
        for i in range(1, n):
            if nums[i] < nums[i-1]:
                dl[i] = max(dl[i], 1 + ul[i-1])
            
            if nums[i] > nums[i-1]:
                ul[i] = max(ul[i], 1 + dl[i-1])

        
        # length of alternating starting at i
        ur = [1] * n 
        dr = [1] * n
        for i in range(n-2, -1, -1):
            if nums[i] < nums[i+1]:
                dr[i] = max(dr[i], 1 + ur[i+1])
            
            if nums[i] > nums[i+1]:
                ur[i] = max(ur[i], 1 + dr[i+1])

        res = max( max(ul), max(dl), max(ur), max(dr) )

        for i in range(1, n-1):
            prv = nums[i-1]
            nxt = nums[i+1]          

            if prv < nxt:
                res = max(res, dl[i-1] + ur[i+1])
            
            if prv > nxt:
                res = max(res, ul[i-1] + dr[i+1])   
        return res
```
