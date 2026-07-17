---
date: 2025-03-02
difficulty: Easy
num: 2570
related_topics:
  - Array
  - Hash Table
  - Two-Pointer
return: Done
---

# Problem: 2570. Merge Two 2D Arrays By Summing Values

## Description

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        cnt = Counter()
        
        for i, v in nums1:
            cnt[i] += v
        
        for i, v in nums2:
            cnt[i] += v

        return [[k, cnt[k]] for k in sorted(cnt)]
```
