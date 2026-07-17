---
date: 2024-07-30
difficulty: Easy
num: 3232
related_topics:
  - Array
  - Math
return: Done
---

# Problem: 3232. Find If Digit Game Can Be Won

## Description
check if two aren’t equal

## Approach / Thoughts
count

## Solution
```python
class Solution:
    def canAliceWin(self, nums: List[int]) -> bool:
        total = sum(nums)

        pick_single = sum(n for n in nums if n < 10)
        pick_double = total - pick_single

        return pick_single != pick_double
```
