---
date: 2025-03-20
difficulty: Medium
num: 3132
related_topics:
  - Array
  - Enumeration
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 3132. Find The Integer Added To Array Ii

## Description
remove two numbers, rest have constant diff

## Approach / Thoughts
brute force, remove 2 check rest

## Solution
```python
class Solution:
    def minimumAddedInteger(self, nums1: List[int], nums2: List[int]) -> int:
        nums1.sort()
        nums2.sort()

        n = len(nums1)
        res = inf

        for i in range(n):
            for j in range(i+1, n):

                prev = None
                idx = flag = 0

                for k in range(n):
                    if k == i or k == j:
                        continue

                    diff = nums2[idx] - nums1[k]
                    if prev != None and prev != diff:
                        flag = 1
                        break
                    prev = diff
                    idx += 1

                if flag == 0:
                    res = min(res, prev)
                
        return res
```
