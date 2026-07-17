---
date: 2024-08-06
difficulty: Medium
num: 3152
related_topics:
  - Array
  - Binary Search
  - Prefix Sum
return: Done
---

# Problem: 3152. Special Array Ii

## Description
find parity range sum

## Approach / Thoughts
sort queries and find breakpoints

## Solution
```python
class Solution:
    def isArraySpecial(self, nums: List[int], queries: List[List[int]]) -> List[bool]:
        breakpoints = []

        for i in range(1, len(nums)):
            if nums[i] % 2 == nums[i-1] % 2:
                breakpoints.append((2*i - 1) / 2)

        breakpoints.sort()
        indexes = {}

        pairs = [(v[0], v[1], j) for j,v in enumerate(queries)]
        pairs.sort()

        res = [True] * len(queries)
        top = bot = 0

        while top < len(breakpoints) and bot < len(pairs):
            s, e, j = pairs[bot]

            if breakpoints[top] < s:
                top += 1
            else:
                if s < breakpoints[top] < e:
                    res[j] = False
                bot += 1
        return res
```
