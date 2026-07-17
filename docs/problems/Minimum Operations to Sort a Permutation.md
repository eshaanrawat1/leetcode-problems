---
date: 2026-05-28
difficulty: Medium
num: 3942
related_topics:
  - 
return:
---

# Problem: 3942. Minimum Operations to Sort a Permutation

## Description
You are given an integer array `nums` of length `n`, where `nums` is a permutation of the integers from 0 to `n - 1`.

You may perform **only** the following operations:

	**Reverse** the entire array.

	**Rotate Left by One**: Move the first element to the end of the array, and rest elements to left by one position.

Return an integer denoting the **minimum** number of operations required to sort the array in **increasing** order. If it is **not possible** to sort the array using only the given operations, return -1.

## Approach / Thoughts
[[Weekly Contest 503]]

observation - for it to be sorted 
- use cyclic trick (chain nums array to its end)
- if valid - there must be a sorted version somewhere in the middle

find the min element (index of 0 - since permutation)
- either it is going to the right, then we do min operations to shift left
- or it is going left, we reverse (+1) and do the same for min cost
- also consider case where we reverse first 

## Solution
```python
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        n = len(nums)
        
        s = list(range(n))
        r = s[::-1]

        res = inf

        m1 = s[0]
        m2 = s[-1]
        arr = nums + nums
        rarr = nums[::-1] + nums[::-1]

        
        def f(arr):
            res = inf
            for i, x in enumerate(arr):
                if x == m1 and i < n:
                    if arr[i:i+n] == s:
                        res = min(res, i)
    
                if x == m1 and i >= n:
                    if arr[i-n+1:i+1] == r:
                        res = min(res, 1+i-n+1)
            return res

        ans = min(f(arr), 1 + f(rarr))
        return ans if ans != inf else -1
```