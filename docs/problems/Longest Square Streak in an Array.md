---
date: 2024-10-27
difficulty: Medium
num: 2501
related_topics:
  - Array
  - Binary Search
  - Dynamic Programming
  - Hash Table
  - Sorting
return: Done
---

# Problem: 2501. Longest Square Streak In An Array

## Description

## Approach / Thoughts
walk the streak

## Solution
```python
class Solution:
    def longestSquareStreak(self, nums: List[int]) -> int:
        s = set(nums)
        longest = 0

        for n in nums:
            if sqrt(n) not in s:
                cur = n
                streak = 0

                while cur in s:
                    cur = cur ** 2
                    streak += 1

                longest = max(longest, streak)

        return longest if longest >= 2 else -1
```
