---
date: 2024-05-26
difficulty: Medium
num: 416
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 416. Partition Equal Subset Sum

## Description
Find if we can partition in 2 disjoint subsets of equal sum

## Approach / Thoughts
find target sum, store all possible subset sums in a set

## Solution
```python
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        target = sum(nums) / 2
        if sum(nums) % 2 == 1: 
            return False
        
        dp = {0}
        for i in range(len(nums)-1,-1,-1):
            next_dp = set()
            for n in dp:
                next_dp.add(nums[i] + n)
                next_dp.add(n)
            dp = next_dp
            if target in dp:
                return True
        return target in dp
```
