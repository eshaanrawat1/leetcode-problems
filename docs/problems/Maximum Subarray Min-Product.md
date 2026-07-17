---
date: 2024-06-28
difficulty: Medium
num: 1856
related_topics:
  - Array
  - Monotonic Stack
  - Prefix Sum
  - Stack
return: Review
---

# Problem: 1856. Maximum Subarray Min Product

## Description
find max area rectangle of sum of subarray * min element

## Approach / Thoughts
max area rectangle with prefix sums to calculate

monotonic increasing stack

## Solution
```python
class Solution:
    def maxSumMinProduct(self, nums: List[int]) -> int:
        prefix = [0]
        for n in nums:
            prefix.append(n + prefix[-1])

        res = 0
        stack = []
        for i, n in enumerate(nums):
            index = i
            while stack and n <= stack[-1][-1]:
                index, num = stack.pop()
                psum = prefix[i] - prefix[index]
                res = max(res, num * psum)
            stack.append([index, n])

        for i in range(len(stack)):
            index, num = stack[i]
            psum = prefix[-1] - prefix[index]
            res = max(res, num * psum)
        return res % (10 ** 9 + 7)
```
