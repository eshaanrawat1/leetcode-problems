---
date: 2025-12-09
difficulty: Medium
num: 1673
related_topics:
  - Array
  - Greedy
  - Monotonic Stack
  - Stack
return: Done
---

# Problem: 1673. Find The Most Competitive Subsequence

## Description
same, smallest subsequence of size k

## Approach / Thoughts
mono stack, greedy take smallest element at each position if we have elements remaining

## Solution
```python
class Solution:
    def mostCompetitive(self, nums: List[int], k: int) -> List[int]:
        stack = []

        N = len(nums)
        if k == N:
            return nums

        for i, n in enumerate(nums):
            while stack and n < stack[-1]:
                nums_stack = len(stack)
                nums_needed = k - nums_stack
                nums_rem = N-i
                if nums_rem > nums_needed:
                    stack.pop()
                else:
                    break
            stack.append(n)
        return stack[:k]
```
