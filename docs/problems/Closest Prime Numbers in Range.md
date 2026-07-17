---
date: 2025-03-07
difficulty: Medium
num: 2523
related_topics:
  - Math
  - Number Theory
return: Done
---

# Problem: 2523. Closest Prime Numbers In Range

## Description
same, min diff of two primes

## Approach / Thoughts
sieve + adjacent primes

## Solution
```python
class Solution:
    def closestPrimes(self, left: int, right: int) -> List[int]:
        sieve = [1] * (right + 1)
        sieve[1] = 0

        for i in range(2, right+1):
            if sieve[i]:
                for j in range(i*i, right+1, i):
                    sieve[j] = 0

        primes = [i for i in range(left, right+1) if sieve[i]]

        res = [-inf, inf]
        for i in range(len(primes)-1):
            diff = primes[i+1] - primes[i]
            cur = res[1] - res[0]

            if diff < cur:
                res = [primes[i], primes[i+1]]
        
        return res if res[0] != -inf else [-1, -1]
```
