---
date: 2024-11-01
difficulty: Medium
num: 3334
related_topics:
  - Array
  - Math
  - Number Theory
return: Done
---

# Problem: 3334. Find The Maximum Factor Score Of Array

## Description

## Approach / Thoughts
max gcd and lcm

brute force

## Solution
```python
class Solution:
    def maxScore(self, nums: List[int]) -> int:
        
        def calc_gcd(nums):
            if len(nums) == 0:
                return 0
                
            g = nums[0]
            for n in nums:
                g = gcd(g, n)
            return g

        def calc_lcm(nums):
            if len(nums) == 0:
                return 0
            
            l = nums[0]
            for n in nums:
                l = lcm(l, n)
            return l

        factor = calc_gcd(nums) * calc_lcm(nums)
        for i in range(len(nums)):
            tmp = nums[:i] + nums[i+1:]
            factor = max(calc_gcd(tmp) * calc_lcm(tmp), factor)

        return factor
        
```
