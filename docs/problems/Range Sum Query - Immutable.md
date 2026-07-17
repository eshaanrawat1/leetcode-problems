---
date: 2024-02-23
difficulty: Easy
num: 303
related_topics:
  - Array
  - Design
  - Prefix Sum
return: Done
---

# Problem: 303. Range Sum Query   Immutable

## Description
Find sum between left and right indices of an array

## Approach / Thoughts
Brute force

Prefix sum

## Solution
```python
class NumArray:

    def __init__(self, nums: List[int]):
        self.nums = nums
        

    def sumRange(self, left: int, right: int) -> int:
        total = 0
        for i in range(left, right+1):
            total += self.nums[i]
        return total


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
```
