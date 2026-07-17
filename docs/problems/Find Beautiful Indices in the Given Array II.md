---
date: 2026-05-09
difficulty: Hard
num: 3008
related_topics:
  - Two Pointers
  - String
  - Binary Search
  - Rolling Hash
  - String Matching
  - Hash Function
return:
---

# Problem: 3008. Find Beautiful Indices in the Given Array II

## Description
You are given a **0-indexed** string `s`, a string `a`, a string `b`, and an integer `k`.

An index `i` is **beautiful** if:

	`0 

Return *the array that contains beautiful indices in **sorted order from smallest to largest***.

## Approach / Thoughts
[[Weekly Contest 380]]

get valid indices with rolling hash and check

## Solution
```python
from sortedcontainers import SortedList

class RollingHash:
    def __init__(self, s, k, base=257, mod=10**9 + 7):
        self.base = base
        self.mod = mod
        self.k = k
        self.base_k = pow(base, k - 1, mod)

        h = 0
        for ch in s[:k]:
            h = (h * base + ord(ch)) % mod
        self.hash = h

    def slide(self, left_char, right_char):
        self.hash = (self.hash - ord(left_char) * self.base_k) % self.mod
        self.hash = (self.hash * self.base + ord(right_char)) % self.mod
        return self.hash

class Solution:
    def beautifulIndices(self, s: str, a: str, b: str, k: int):
        
        def get_indices(s, b):
            n = len(s)
            blen = len(b)
    
            sl = SortedList()
    
            rh1 = RollingHash(s, blen)
            bh = RollingHash(b, blen).hash
    
            if rh1.hash == bh:
                sl.add(0)
    
            for i in range(blen, n):
                new_hash = rh1.slide(s[i-blen], s[i])
                if new_hash == bh:
                    sl.add(i-blen+1)
            return sl

        sla = get_indices(s, a)
        slb = get_indices(s, b)

        res = []
        for i in sla:
            slb.add(i)
            j = slb.index(i)
            if j-1 >= 0 and abs(slb[j-1] - i) <= k:
                res.append(i)
            elif j+1 < len(slb) and abs(slb[j+1] - i) <= k:
                res.append(i)
            slb.remove(i)
        return res
```