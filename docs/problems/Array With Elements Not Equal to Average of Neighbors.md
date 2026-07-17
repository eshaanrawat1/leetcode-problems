---
date: 2024-05-03
difficulty: Medium
num: 1968
related_topics:
  - Array
  - Greedy
  - Sorting
return: Done
---

# Problem: 1968. Array With Elements Not Equal To Average Of Neighbors

## Description
same as problem

## Approach / Thoughts
sort, element with smaller or larger neighbors will never have same average

basically partition array and fill in with two loops

## Solution
```python
class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        nums.sort()
        res = [0] * len(nums)

        i = j = 0
        while i < len(res):
            res[i] = nums[j]
            i += 2
            j += 1
        
        i = 1
        while i < len(res):
            res[i] = nums[j]
            i += 2
            j += 1
        return res
```
