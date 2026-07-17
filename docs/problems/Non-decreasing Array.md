---
date: 2024-02-09
difficulty: Medium
num: 665
related_topics:
  - Array
return: Done
---

# Problem: 665. Non Decreasing Array

## Description
Return true if we can change at most one element in the array to make it non-decreasing, else false

## Approach / Thoughts
Once we find a pair that is out of order, then we make two arrays that handle each possibility:

- make the previous element the current element

- make the current element the previous element

- break

If either of these arrays are valid after that one operation, return True

## Solution
```python
class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        cnt = 0
        one, two = nums[:], nums[:]
        for i in range(1, len(nums)):
            if nums[i] < nums[i-1]:
                one[i-1] = nums[i]
                two[i] = nums[i-1]
                break

        one_check, two_check = True, True
        for i in range(1, len(nums)):
            if one[i] < one[i-1]:
                one_check = False
            if two[i] < two[i-1]:
                two_check = False
        return one_check or two_check
```
