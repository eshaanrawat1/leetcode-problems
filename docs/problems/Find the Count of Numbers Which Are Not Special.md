---
date: 2024-07-30
difficulty: Medium
num: 3233
related_topics:
  - Array
  - Math
  - Number Theory
return: Review
---

# Problem: 3233. Find The Count Of Numbers Which Are Not Special

## Description
find all numbers whose roots are prime

## Approach / Thoughts
find all nums whose squares can be between l, r - range ≤ sqrt(r)

find all primes among those nums (sieve)

## Solution
```python
class Solution:
    def nonSpecialCount(self, l: int, r: int) -> int:
        total = r - l + 1
        upper_bound = int(sqrt(r)) 

        is_prime = [True] * (upper_bound + 1)
        is_prime[0] = is_prime[1] = False

        for i in range(2, int(sqrt(upper_bound)) + 1):
            if is_prime[i]:
                for j in range(2*i, upper_bound+1, i):
                    is_prime[j] = False

        count = 0
        for i in range(2, upper_bound + 1):
            if is_prime[i] and l <= i * i <= r:
                count += 1
        return total - count
```
