---
date: 2025-12-25
difficulty: Medium
num: 3770
related_topics:
  - Array
  - Math
  - Number Theory
return: Done
---

# Problem: 3770. Largest Prime From Consecutive Prime Sum

## Description

## Approach / Thoughts
sieve + check primes

## Solution
```python
class Solution:
    def largestPrime(self, n: int) -> int:
        sieve = [1] * (n+1)
        sieve[0] = sieve[1] = 0

        for i in range(2, ceil(sqrt(n+1))):
            if sieve[i]:
                for j in range(i*i, n+1, i):
                    sieve[j] = 0
        
        primes = [i for i,x in enumerate(sieve) if x]
        prime_set = set(primes)
        

        res = best_cand = 0
        for p in primes:
            if res + p > n:
                break
            res += p
            if res in prime_set:
                best_cand = res
        return best_cand
```
