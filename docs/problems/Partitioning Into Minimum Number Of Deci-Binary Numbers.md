---
date: 2026-03-01
difficulty: Medium
num: 1689
related_topics:
  - Senior
  - String
  - Greedy
return:
---

# Problem:  

## Description
A decimal number is called **deci-binary** if each of its digits is either `0` or `1` without any leading zeros. For example, `101` and `1100` are **deci-binary**, while `112` and `3001` are not.

Given a string `n` that represents a positive decimal integer, return _the **minimum** number of positive **deci-binary** numbers needed so that they sum up to_ `n`_._

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
only need to find max number in the string, combinations of 0 and 1 for each digit place

## Solution
```Python
class Solution:
	def minPartitions(self, n: str) -> int:
	return int(max(n))
```
