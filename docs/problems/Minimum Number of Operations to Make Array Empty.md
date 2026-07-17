---
date: 2024-01-04
difficulty: Medium
num: 2870
related_topics:
  - Array
  - Counting
  - Greedy
  - Hash Table
return: Done
---

# Problem: 2870. Minimum Number Of Operations To Make Array Empty

## Description
Given an array of nums you can remove 2 or 3 nums at a time, nums must be equal

## Approach / Thoughts
Add freq of nums to a dict and iterate through vals

- if vals is 1 return -1, cannot be removed

- otherwise return ceiling of integer division by 3

## Solution
```python
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        # 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

        freq = {}

        for num in nums:
            if num in freq:
                freq[num] += 1
            else:
                freq[num] = 1

        total = 0
        for val in freq.values():
            if val == 1:
                return -1
            total += -(-val//3)

        return total
```
