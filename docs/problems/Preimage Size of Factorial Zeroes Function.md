---
date: 2024-12-22
difficulty: Hard
num: 793
related_topics:
  - Binary Search
  - Math
return: Done
---

# Problem: 793. Preimage Size Of Factorial Zeroes Function

## Description
for k, find how many integers! end with k zeroes

## Approach / Thoughts
number of 5 factors is number of trailing zeroes

binary search for upper bound of k zeroes - k-1 zeroes for exactly k

## Solution
```python
class Solution:
    def preimageSizeFZF(self, k: int) -> int:
        if k == 0:
            return 5
        
        def trailing(x):
            cnt = 0
            while x:
                cnt += x // 5
                x //= 5
            return cnt

        def bs(t):
            l, r = 0, 1e10
            res = 0

            while l <= r:
                m = (l + r) // 2
                if trailing(m) > t:
                    r = m - 1
                else:
                    res = m
                    l = m + 1
            return res

        return int(bs(k) - bs(k-1))
```
