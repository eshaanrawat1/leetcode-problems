---
date: 2023-09-24
difficulty: Easy
num: 389
related_topics:
  - Bit Manipulation
  - Hash Table
  - Sorting
  - String
return: Done
---

# Problem: 389. Find The Difference

## Description
There are two strings s and t. String t is the same as s, except randomized with one extra letter. Find and return that extra letter.

## Approach / Thoughts
My approach with some guidance from the solution was to iterate through each char in t. There is a built-in function in Python that returns the frequency of an item in a list called count().

So we iterate through t. If the frequency of a letter in s did not match the frequency in t, then that is the value that should be returned.

## Solution
```python
class Solution:
	def findTheDifference(self, s: str, t: str) -> str:
		
		for i in t:
			if s.count(i) != t.count(i)
				return i

		return ""
```
