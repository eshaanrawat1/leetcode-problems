---
date: 2024-01-20
difficulty: Medium
num: 2442
related_topics:
  - Array
  - Hash Table
  - Math
return: Done
---

# Problem: 2442. Count Number Of Distinct Integers After Reverse Operations

## Description
Add the reverse of each number to the end of the array and return how many unique numbers there are.

## Approach / Thoughts
Use string reversions and then convert to integer to add to set which contains unique elements.

## Solution
```python
class Solution:
    def countDistinctIntegers(self, nums: List[int]) -> int:
        res = []
        for num in nums:
            res.append(int(str(num)[::-1]))

        unique = set()
        for i in range(len(nums)):
            unique.add(nums[i])
            unique.add(res[i])
        return len(unique)
```
