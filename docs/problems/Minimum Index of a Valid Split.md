---
date: 2025-03-26
difficulty: Medium
num: 2780
related_topics:
  - Array
  - Hash Table
  - Sorting
return: Done
---

# Problem: 2780. Minimum Index Of A Valid Split

## Description
same - split so each half has same majority element

## Approach / Thoughts
prefix sum, inc and dec as we go

## Solution
```python
class Solution:
    def minimumIndex(self, nums: List[int]) -> int:
        left = 0
        right = len(nums)
        
        dom = -inf
        freq = Counter(nums)
        for x in freq:
            if freq[x] > right // 2:
                dom = x
                break

        lfreq, rfreq = 0, freq[dom]

        for i, n in enumerate(nums):
            left += 1
            right -= 1

            if n == dom:
                lfreq += 1
                rfreq -= 1

            if lfreq > (left / 2) and rfreq > (right / 2):
                return i
        return -1
```
