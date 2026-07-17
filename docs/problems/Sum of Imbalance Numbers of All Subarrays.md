---
date: 2025-12-18
difficulty: Hard
num: 2763
related_topics:
  - Array
  - Hash Table
  - Ordered Set
return: Done
---

# Problem: 2763. Sum Of Imbalance Numbers Of All Subarrays

## Description
sane, imbalance if a numbers direct neighbor isnt in the subarray

## Approach / Thoughts
same, iterate every subarray and use a set to see if +- 1 is in the set

if no adjacent neighbor is in the set, then imbalance increases

missed invariant - if a number connects two bridges, ie say seen is 1,2,4,5 which has 1 imbalance, then adding 3 connects 2-3-4 which -1 imbalance

## Solution
```python
class Solution:
    def sumImbalanceNumbers(self, nums: List[int]) -> int:
        res = 0

        n = len(nums)
        for i in range(n):
            snums = {nums[i]}
            imbalance = 0
            for j in range(i+1, n):
                if nums[j] in snums:
                    pass
                elif nums[j]-1 not in snums and nums[j]+1 not in snums:
                    imbalance += 1
                elif nums[j]-1 in snums and nums[j]+1 in snums:
                    imbalance -= 1
                res += max(0, imbalance)
                snums.add(nums[j])
        return res
```
