---
date: 2023-10-29
difficulty: Easy
num: 2656
related_topics:
  - Array
  - Greedy
return: Done
---

# Problem: 2656. Maximum Sum With Exactly K Elements

## Description
To find max sum by replacing elements. For example if max in array is 5 and k is 3, we get 5 + 6 + 7 = 18.

## Approach / Thoughts
I found the max and then added max to max+1 k times.

## Solution
```python
class Solution:
    def maximizeSum(self, nums: List[int], k: int) -> int:

        m, total = max(nums), 0

        for i in range(0, k):
            total += m
            m += 1

        return total
```
