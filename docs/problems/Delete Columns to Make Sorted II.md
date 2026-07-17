---
date: 2025-12-21
difficulty: Medium
num: 955
related_topics:
  - Array
  - Greedy
  - String
return: Done
---

# Problem: 955. Delete Columns To Make Sorted Ii

## Description

## Approach / Thoughts
delete all bad columns, recheck

## Solution
```python
class Solution:
    def minDeletionSize(self, strs: List[str]) -> int:
        m, n = len(strs), len(strs[0])
        self.res = 0

        def check(A, B, dels):
            i = 0
            while i < n:
                if A[i] < B[i]:
                    break
                if A[i] > B[i]:
                    dels.add(i)
                i += 1      
    

        while True:
            flag = False
            dels = set()

            for i in range(1, m):
                prv = strs[i-1]
                cur = strs[i]

                if prv > cur:
                    flag = True
                    check(prv, cur, dels)
         
            strs = [''.join(s[i] for i in range(n) if i not in dels) for s in strs]
            self.res += len(dels)

            n -= len(dels)
            if not flag:
                break
         
        return self.res
```
