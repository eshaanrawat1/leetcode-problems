---
date: 2026-05-09
difficulty: Medium
num: 3006
related_topics:
  - Two Pointers
  - String
  - Binary Search
  - Rolling Hash
  - String Matching
  - Hash Function
return:
---

# Problem: 3006. Find Beautiful Indices in the Given Array I

## Description
You are given a **0-indexed** string `s`, a string `a`, a string `b`, and an integer `k`.

An index `i` is **beautiful** if:

	`0 

Return *the array that contains beautiful indices in **sorted order from smallest to largest***.

## Approach / Thoughts
[[Weekly Contest 380]]

brute force string check
## Solution
```python
from sortedcontainers import SortedList

class Solution:
    def beautifulIndices(self, s: str, a: str, b: str, k: int):
        n = len(s)
        alen = len(a)
        blen = len(b)
        
        sl = SortedList()
        for i in range(n):
            if s[i: i+blen] == b:
                sl.add(i)

        res = []
        for i in range(n):
            if s[i: i+alen] == a:
                sl.add(i)
                j = sl.index(i)

                if j-1 >= 0 and abs(sl[j-1] - i) <= k:
                    res.append(i)
                elif j+1 < len(sl) and abs(sl[j+1] - i) <= k:
                    res.append(i)
                
                sl.remove(i)
        return res
```