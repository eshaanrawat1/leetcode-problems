---
date: 2024-12-08
difficulty: Medium
num: 2343
related_topics:
  - Array
  - Divide and Conquer
  - Heap (Priority Queue)
  - Quickselect
  - Radix Sort
  - Sorting
  - String
return: Done
---

# Problem: 2343. Query Kth Smallest Trimmed Number

## Description
bunch of strings of same length

trim t numbers and return k smallest in each query

## Approach / Thoughts
buckets by trim size and sort each bucket

## Solution
```python
class Solution:
    def smallestTrimmedNumbers(self, nums: List[str], queries: List[List[int]]) -> List[int]:
        trims = defaultdict(list)
        N = len(nums[0])

        for j, n in enumerate(nums):
            for i in range(N):
                trims[i].append(( int(n[N-i-1:]), j ))

        for t in trims:
            trims[t].sort(key=lambda x: (x[0], x[1]))

        res = []
        for k, t in queries:
            res.append(trims[t-1][k-1][1])
        return res
```
