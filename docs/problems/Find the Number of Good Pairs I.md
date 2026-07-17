---
date: 2024-05-27
difficulty: Easy
num: 3162
related_topics:
  - Array
return: Done
---

# Problem: 3162. Find The Number Of Good Pairs I

## Description
find pairs based on divisibility

## Approach / Thoughts
brute force, check every pair

## Solution
```python
class Solution:
    def numberOfPairs(self, nums1: List[int], nums2: List[int], k: int) -> int:
        cnt = 0
        for i in range(len(nums1)):
            for j in range(len(nums2)):
                if nums1[i] % (nums2[j] * k) == 0:
                    cnt += 1
        return cnt
```
