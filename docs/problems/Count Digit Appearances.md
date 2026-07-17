---
date: 2026-04-14
difficulty: Medium
num: 3895
related_topics:
  - Array
  - Math
return:
---

# Problem:  

## Description
You are given an integer array `nums` and an integer `digit`.

Return the total number of times `digit` appears in the decimal representation of all elements in `nums`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
<!-- Write your approach, ideas, or algorithms here -->

## Solution
```python
class Solution:
    def countDigitOccurrences(self, nums: list[int], digit: int) -> int:
        # 0:44
        
        s = str(digit)

        res = 0
        for n in nums:
            res += str(n).count(s)
        return res