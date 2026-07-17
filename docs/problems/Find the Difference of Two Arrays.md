---
date: 2023-09-28
difficulty: Easy
num: 2215
related_topics:
  - Array
  - Hash Table
return: Done
---

# Problem: 2215. Find The Difference Of Two Arrays

## Description
Given two lists, return two lists that each have the distinct elements in the other set. For example, ans[0] will have all the distinct elements of list 1 which are not present in list 2. Same for ans[1] with 2 and 1.

## Approach / Thoughts
My approach was to just use a two-pass to find which elements were not in nums1 and nums2. One thing to consider was that no duplicates were allowed, so it was pretty simple iteration.

## Solution
```python
class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:

			ans = [[], []]
			for i in nums1:
				if i not in nums2 and i not in ans[0]:
					ans[0].append(i)

			for i in nums2:
				if i not in nums1 and i not in ans[1]:
					ans[0].append(i)
```
