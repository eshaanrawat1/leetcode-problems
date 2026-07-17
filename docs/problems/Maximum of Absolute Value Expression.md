---
date: 2025-12-29
difficulty: Medium
num: 1131
related_topics:
  - Array
  - Math
return: Done
---

# Problem: 1131. Maximum Of Absolute Value Expression

## Description

## Approach / Thoughts
break into linear cases of +-

## Solution
```python
class Solution:
    def maxAbsValExpr(self, arr1: List[int], arr2: List[int]) -> int:
        
        # a1[i] - a1[j] + a2[i] - a2[j] + i - j
        # a1[i] - a1[j] + a2[j] - a2[i] + i - j
        # a1[j] - a1[i] + a2[i] - a2[j] + i - j
        # a1[j] - a1[i] + a2[j] - a2[i] + i - j


        # 1.   a1[i] + a2[i] + i        
        # 2.   a1[i] - a2[i] + i        
        # 3.  -a1[i] + a2[i] + i
        # 4.  -a1[i] - a2[i] + i

        # wlog assume i>j

        buckets = [[] for _ in range(4)]

        n = len(arr1)
        for i in range(n):
            buckets[0].append(arr1[i] + arr2[i] + i)
            buckets[1].append(arr1[i] - arr2[i] + i)
            buckets[2].append(-arr1[i] + arr2[i] + i)
            buckets[3].append(-arr1[i] - arr2[i] + i)

        def calc_ng(bucket):
            ng = [-inf] * n
            for i in range(n-2, -1, -1):
                ng[i] = max(ng[i+1], bucket[i+1])
            return ng
        
        nxt_greater = []
        for b in buckets:
            nxt_greater.append(calc_ng(b))

        res = -inf
        for j in range(n):
            b0 = -arr1[j] - arr2[j] - j
            b1 = -arr1[j] + arr2[j] - j
            b2 = arr1[j] - arr2[j] - j
            b3 = arr1[j] + arr2[j] - j

            res = max(
                res,
                b0 + nxt_greater[0][j],
                b1 + nxt_greater[1][j],
                b2 + nxt_greater[2][j],
                b3 + nxt_greater[3][j],
            )
        return res

        
```
