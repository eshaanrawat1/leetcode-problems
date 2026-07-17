---
date: 2024-12-22
difficulty: Medium
num: 456
related_topics:
  - Array
  - Binary Search
  - Monotonic Stack
  - Ordered Set
  - Stack
return: Review
---

# Problem: 456. Pattern

## Description

## Approach / Thoughts
pre process mins mono stack

## Solution
```python
class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        N = len(nums)

        mins = nums[:]
        for i in range(1, N):
            mins[i] = min(nums[i], mins[i-1])

        stack = []
        for i in range(N-1, -1, -1):
            if nums[i] <= mins[i]:
                continue

            while stack and stack[-1] <= mins[i]:
                stack.pop()
            if stack and stack[-1] < nums[i]:
                return True
            stack.append(nums[i])

        return False
```
