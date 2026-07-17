---
date: 2023-10-09
difficulty: Medium
num: 287
related_topics:
  - Array
  - Binary Search
  - Bit Manipulation
  - Two-Pointer
return: Done
---

# Problem: 287. Find The Duplicate Number

## Description
Find duplicate number in an array given all elements are between 0 and n-1.

## Approach / Thoughts
Add values to a set and look for the first duplicate.

## Solution
```python
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:

			myset = set()
			for i in nums:
				if i not in myset:
					myset.add(i)
				else:
					return 1
```
