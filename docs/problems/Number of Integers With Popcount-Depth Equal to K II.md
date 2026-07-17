---
date: 2025-12-03
difficulty: Hard
num: 3624
related_topics:
  - Array
  - Binary Indexed Tree
  - Divide and Conquer
  - Segment Tree
return: Done
---

# Problem: 3624. Number Of Integers With Popcount Depth Equal To K Ii

## Description

## Approach / Thoughts
compute depths in logn replace when needed

store mapping of num → index and binary search on nums

## Solution
```python
class Solution:
    def popcountDepth(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        
        def depth(n):
            if n == 1:
                return 0
            return 1 + depth(n.bit_count())

        ss = defaultdict(SortedSet)
        for i, n in enumerate(nums):
            ss[depth(n)].add(i)

        res = []
        for q in queries:
            if q[0] == 1:
                t, l, r, k = q
                res.append(bisect_right(ss[k], r) - bisect_left(ss[k], l))
            else:
                t, idx, val = q
                to_rem = nums[idx]
                nums[idx] = val
                ss[depth(to_rem)].remove(idx)
                ss[depth(val)].add(idx)
                
        return res
```
