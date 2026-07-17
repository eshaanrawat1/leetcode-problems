---
date: 2024-02-22
difficulty: Easy
num: 1365
related_topics:
  - Array
  - Counting
  - Hash Table
  - Sorting
return: Done
---

# Problem: 1365. How Many Numbers Are Smaller Than The Current Number

## Description
Same as problem

## Approach / Thoughts
Originally n^2 approach of two for loops

Then sort and use hashmap

## Solution
```python
class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        original = nums[:]
        nums.sort()
        res = {}
        for i in range(len(nums)-1,-1,-1):
            res[nums[i]] = i

        ans = [0] * len(nums)
        for i, v in enumerate(original):
            ans[i] = res[v]
        return ans


        

        
```
