---
date: 2024-08-18
difficulty: Hard
num: 1044
related_topics:
  - Binary Search
  - Hash Function
  - Rolling Hash
  - Sliding Window
  - String
  - Suffix Array
return: Review
---

# Problem: 1044. Longest Duplicate Substring

## Description

## Approach / Thoughts
robin karp, and binary search

for all length L substrings, see if we can make a rolling hash that would duplicate

## Solution
```python
class Solution:
    def longestDupSubstring(self, s: str) -> str:
        S = len(s)
        m = 2**63 - 1
        A = [ord(c) - ord('a') for c in s]
        
        def feasible(threshold):
            p = pow(26, threshold, m)

            rh = reduce(lambda x, y: (x * 26 + y) % m, A[:threshold], 0)
            visit = {rh}

            # update rolling hash for r and l
            l = 0
            for r in range(threshold, S):
                rh = (rh * 26 + A[r] - A[l] * p) % m
                if rh in visit:
                    return True, l+1, r
                visit.add(rh)
                l += 1
            
            return False, -1, -1

        lo, hi = 1, S-1
        res = None

        while lo <= hi:
            mid = (lo + hi) // 2

            ans = feasible(mid)
            if ans[0]:
                res = ans
                lo = mid + 1
            else:
                hi = mid - 1

        if not res:
            return ""
        return s[res[1] : res[2]+1]
```
