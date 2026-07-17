---
date: 2026-04-14
difficulty: Medium
num: 3896
related_topics:
  - Array
  - String
return:
---

# Problem:  

## Description
You are given an integer array `nums`.

An array is considered **alternating prime** if:

- Elements at **even** indices (0-based) are **prime** numbers.
- Elements at **odd** indices are **non-prime** numbers.

In one operation, you may **increment** any element by 1.

Return the **minimum** number of operations required to transform `nums` into an **alternating prime** array.

A **prime** number is a natural number greater than 1 with only two factors, 1 and itself.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
sieve + binary search
## Solution
```python
class Solution:
    def minOperations(self, nums: list[int]) -> int:
        # 8:34
        
        n = len(nums)
        max_num = max(nums) + 1000

        sieve = [1] * (max_num+1)
        sieve[0] = sieve[1] = 0
        for i in range(2, len(sieve)):
            if sieve[i]:
                for j in range(i*i, len(sieve), i):
                    sieve[j] = 0
        primes = [i for i,x in enumerate(sieve) if x]
        prime_set = set(primes)
        
        res = 0
        for i, x in enumerate(nums):
            if i % 2 == 0:
                if x in prime_set:
                    continue
                j = bisect_right(primes, x)
                res += primes[j] - x
            else:
                if x in prime_set:
                    if x == 2: res += 2
                    else: res += 1
        return res