---
date: 2024-07-23
difficulty: Easy
num: 1636
related_topics:
  - Array
  - Hash Table
  - Sorting
return: Done
---

# Problem: 1636. Sort Array By Increasing Frequency

## Description

## Approach / Thoughts
bucket sort, reverse sort each bucket

## Solution
```python
class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        cnt = Counter(nums)
        bucket = [[] for _ in range(len(nums)+1)] 

        for n in nums:
            freq = cnt[n]
            bucket[freq].append(n)

        res = []
        for b in bucket:
            b.sort(reverse=True)
            res.extend(b)
        return res
```
