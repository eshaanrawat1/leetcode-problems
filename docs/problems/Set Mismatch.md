---
date: 2024-01-21
difficulty: Easy
num: 645
related_topics:
  - Array
  - Bit Manipulation
  - Hash Table
  - Sorting
return: Done
---

# Problem: 645. Set Mismatch

## Description
Find the duplicate number in a set and the number that is missing from range 1 to n inclusive.

## Approach / Thoughts
Use sum to find missing number, use dict to find duplicate number.

## Solution
```python
class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        res = [0] * 2
        res[1] = -(sum(set(nums)) - sum(range(1,len(nums)+1)))

        c1 = Counter(nums)
        for key, val in c1.items():
            if val == 2:
                res[0] = key
                return res
```
