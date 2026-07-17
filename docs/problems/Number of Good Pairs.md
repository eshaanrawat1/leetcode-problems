---
date: 2024-06-09
difficulty: Easy
num: 1512
related_topics:
  - Array
  - Counting
  - Hash Table
  - Math
return: Done
---

# Problem: 1512. Number Of Good Pairs

## Description
find number of pairs with matched values

## Approach / Thoughts
frequency count and math

## Solution
```python
class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        cnt = Counter(nums)

        total = 0
        for v in cnt.values():
            total += (v * (v-1)) // 2
        return total
```
