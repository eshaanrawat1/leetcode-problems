---
date: 2024-08-24
difficulty: Hard
num: 564
related_topics:
  - Math
  - String
return: Done
---

# Problem: 564. Find The Closest Palindrome

## Description

## Approach / Thoughts
check edge cases where len of palindrome changes

check normal case of all bases to reflect

## Solution
```python
class Solution:
    def nearestPalindromic(self, n: str) -> str:
        def reflect(half):
            l = str(half)
            if len(sn) % 2 == 1:
                return l + l[::-1][1:]
            else:
                return l + l[::-1]
        
        N, n, sn = len(n), int(n), n
        if n <= 10:
            return str(n-1)
        if log10(n).is_integer() or log10(n-1).is_integer():
            return '9' * (N-1)
        if log10(n+1).is_integer():
            return '1' + ('0' * (N-1)) + '1'

        base = int(sn[ : (N + 1) // 2])
        l_base = base - 1
        r_base = base + 1

        print(reflect(l_base))

        return min(
            map(reflect, (l_base, base, r_base,)),
            key=lambda x: abs(n - int(x)) or float("inf"),
        ) 
```
