---
date: 2024-07-30
difficulty: Medium
num: 204
related_topics:
  - Array
  - Enumeration
  - Math
  - Number Theory
return: Done
---

# Problem: 204. Count Primes

## Description

## Approach / Thoughts
sieve

## Solution
```python
class Solution:
    def countPrimes(self, n: int) -> int:
        if n < 2:
            return 0

        factor_bound = int(sqrt(n))

        is_prime = [True] * (n+1)
        is_prime[0] = is_prime[1] = False

        for i in range(2, factor_bound+1):
            if is_prime[i]:
                for j in range(i*i, n+1, i):
                    is_prime[j] = False
        
        total = sum(1 for i,v in enumerate(is_prime) if v)
        if is_prime[-1]: 
            total -= 1
        return total
```
