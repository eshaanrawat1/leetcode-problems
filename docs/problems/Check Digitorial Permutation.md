---
date: 2026-03-03
difficulty: Medium
num: 3484
related_topics:
  - Senior
  - Math
  - Counting
return:
---

# Problem:  

## Description
You are given an integer `n`.

A number is called **digitorial** if the sum of the **factorials** of its digits is **equal** to the number itself.

Determine whether **any permutation** of `n` (including the original order) forms a **digitorial** number.

Return `true` if such a **permutation** exists, otherwise return `false`.

**Note**:

- The **factorial** of a non-negative integer `x`, denoted as `x!`, is the **product** of all positive integers **less than or equal** to `x`, and `0! = 1`.
- A **permutation** is a rearrangement of all the digits of a number that does **not** start with zero. Any arrangement starting with zero is invalid.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
brute force - but can solve with freq maps

## Solution
```Python
class Solution:
	def isDigitorialPermutation(self, n: int) -> bool:
		res = 0
		x = n

		while x:
			res += factorial(x % 10)
			x //= 10
		return tuple(str(res)) in itertools.permutations(str(n))