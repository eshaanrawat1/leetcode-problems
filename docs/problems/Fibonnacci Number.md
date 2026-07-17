---
date: 2023-09-13
difficulty: Easy
num: 509
related_topics:
  - Dynamic Programming
  - Math
  - Memoization
  - Recursion
return: Done
---

# Problem: 509. Fibonnacci Number

## Description
The problem was to find the nth fibonacci number.

## Approach / Thoughts
My approach was to use recursion and memoization. The recursive call would find the nth number by finding the sum of the two previous numbers. Those two previous numbers would be found using the previous two numbers.

In order to speed up the runtime process, it is easier to use memoization. This stores the values we already processed in a list and will directly return them if the call to fib is made.

## Solution
```python
class Solution:
	def fib(self, n: int) -> int:

		memo = []
		
		if n in memo:
			return memo[n]
		if n <= 1:
			return n
		else:
			res = self.fib(n-2) + self.fib(n-1)

		memo.append(res)
		return res
		
```
