---
date: 2026-05-03
difficulty: Medium
num: 3918
related_topics:
  - Array
  - Math
return:
---

# Problem:  

## Description
You are given an integer `n`.

Let `r` be the integer formed by reversing the digits of `n`.

Return the **sum** of all prime numbers between `min(n, r)` and `max(n, r)`, inclusive.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Weekly Contest 500]]

sieve

## Solution
```python
class Solution:
    def sumOfPrimesInRange(self, n: int) -> int:

        sieve = [1] * 1001
        sieve[0] = sieve[1] = 0

        for i in range(2, 1001):
            if sieve[i]:
                for j in range(i*i, 1001, i):
                    sieve[j] = 0

        primes = set([i for i,x in enumerate(sieve) if x])

        s = str(n)
        r = int(s[::-1])
        
        min_num = min(n, r)
        max_num = max(n, r)

        res = 0
        for j in range(min_num, max_num+1):
            if j in primes:
                res += j
        return res