---
date: 2024-06-25
difficulty: Easy
num: 496
related_topics:
  - Array
  - Hash Table
  - Monotonic Stack
  - Stack
return: Done
---

# Problem: 496. Next Greater Element I

## Description

## Approach / Thoughts
keep track of next greater with monotonic stack

map index and add

## Solution
```python
class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        N2 = len(nums2)
        res = [-1] * N2
        stack = [nums2[N2-1]]

        for i in range(N2-2, -1, -1):
            while stack and stack[-1] <= nums2[i]:
                stack.pop()
            if stack:
                res[i] = stack[-1]
            stack.append(nums2[i])

        next_greater = {}
        for i in range(N2):
            next_greater[nums2[i]] = res[i]

        N1 = len(nums1)
        output = [-1] * N1

        for i, n in enumerate(nums1):
            output[i] = next_greater[n]
        return output
```
