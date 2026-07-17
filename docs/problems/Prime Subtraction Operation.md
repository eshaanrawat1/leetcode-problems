---
date: 2024-11-11
difficulty: Medium
num: 2601
related_topics:
  - Array
  - Binary Search
  - Greedy
  - Math
  - Number Theory
return: Done
---

# Problem: 2601. Prime Subtraction Operation

## Description
make nums strictly increasing by subtracting one prime from each number

## Approach / Thoughts
greedy, subtract as much as possible

sieve to generate primes, binary search for primes

## Solution
```python
class Solution:
    def primeSubOperation(self, nums: List[int]) -> bool:
        
        def sieve(cap):
            res = [1] * cap
            res[0] = res[1] = 0

            for i in range(2, cap):
                if res[i]:
                    for j in range(i*i, cap, i):
                        res[j] = 0
            return res

        primes = [i for i, n in enumerate(sieve(max(nums)+1)) if n]
        prev = [-1]
        
        for i in range(len(nums)):
            idx = bisect_left(primes, nums[i]) - 1

            while idx >= 0 and (nums[i] - primes[idx] <= prev[-1]):
                idx -= 1

            if idx < 0:
                prev.append(nums[i])
            else:
                prev.append(nums[i] - primes[idx])
        
        for i in range(1, len(prev)):
            if prev[i] <= prev[i-1]:
                return False
        return True
```
