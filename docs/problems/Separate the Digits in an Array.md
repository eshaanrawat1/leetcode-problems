---
date: 2026-05-11
difficulty: Easy
num: 2553
related_topics:
  - Array
  - Simulation
return:
---

# Problem: 2553. Separate the Digits in an Array

## Description
Given an array of positive integers `nums`, return *an array *`answer`* that consists of the digits of each integer in *`nums`* after separating them in **the same order** they appear in *`nums`.

To separate the digits of an integer is to get all the digits it has in the same order.

	For example, for the integer `10921`, the separation of its digits is `[1,0,9,2,1]`.

## Approach / Thoughts
parse

## Solution
```python
class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        s = ''.join(str(x) for x in nums)
        return [int(c) for c in s]
```