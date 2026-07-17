---
date: 2024-07-18
difficulty: Hard
num: 41
related_topics:
  - Array
  - Hash Table
return: Review
---

# Problem: 41. First Missing Positive

## Description

## Approach / Thoughts
clear up garbage values

flip indices 0 based

check for first index not seen or positive

## Solution
```python
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        N = len(nums)

        for i, n in enumerate(nums):
            if n <= 0:
                nums[i] = N+1

        for i, n in enumerate(nums):
            index = int(abs(n))
            if index <= N and nums[index-1] > 0:
                nums[index-1] *= -1

        for i in range(N):
            if nums[i] > 0:
                return i+1
        return N+1
```
