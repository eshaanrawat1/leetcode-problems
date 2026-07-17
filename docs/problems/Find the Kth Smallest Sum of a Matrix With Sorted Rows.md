---
date: 2026-06-17
difficulty: Hard
num: 1439
related_topics:
  - Array
  - Binary Search
  - Heap (Priority Queue)
  - Matrix
return:
---

# Problem: 1439. Find the Kth Smallest Sum of a Matrix With Sorted Rows

## Description
You are given an `m x n` matrix `mat` that has its rows sorted in non-decreasing order and an integer `k`.

You are allowed to choose **exactly one element** from each row to form an array.

Return *the *`kth`* smallest array sum among all possible arrays*.

## Approach / Thoughts
enumerate every possible row combination and put in a sortedset
O(mnklg(mn)) roughly

## Solution
```python
from sortedcontainers import SortedSet

class Solution:
    def kthSmallest(self, mat: List[List[int]], k: int) -> int:
        m, n = len(mat), len(mat[0])

        s = SortedSet()
        cur = sum(r[0] for r in mat)
        t = tuple([0] * m)

        s.add((cur, t))
        seen = {(cur, t)}

        k -= 1
        while s:
            c, t = s.pop(0)
            k -= 1

            for i in range(m):
                j = t[i]
                
                if j+1 < n:
                    tc = list(t)
                    tc[i] += 1
                    nc = c
                    nc -= mat[i][j]
                    nc += mat[i][j+1]

                    ttc = tuple(tc)
                    if (nc, ttc) not in seen:
                        s.add((nc, ttc))
                        seen.add((nc, ttc))

            if k == 0:
                return s[0][0]
```