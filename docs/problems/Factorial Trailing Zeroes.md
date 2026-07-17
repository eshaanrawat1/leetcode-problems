---
date: 2026-05-18
difficulty: Medium
num: 172
related_topics:
  - Math
return:
---

# Problem: 172. Factorial Trailing Zeroes

## Description
Given an integer `n`, return *the number of trailing zeroes in *`n!`.

Note that `n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1`.

## Approach / Thoughts
brute force, count 5s

## Solution
```python
class Solution:
    def trailingZeroes(self, n: int) -> int:
        
        def cnt(x):
            cnt = 0
            while x > 1 and x % 5 == 0:
                cnt += 1
                x //= 5
            return cnt

        return sum(cnt(x) for x in range(1, n+1))
```