---
date: 2024-06-30
difficulty: Hard
num: 2709
related_topics:
  - Array
  - Math
  - Number Theory
  - Union Find
return: Done
---

# Problem: 2709. Greatest Common Divisor Traversal

## Description
see if we can jump across the array by linking pairs with common divisors ≠ 1

## Approach / Thoughts
union find, store prime factors with index and join indices if prime factor already exists

## Solution
```python
class UnionFind:
    def __init__(self, nums):
        self.n = len(nums)
        self.par = [i for i in range(self.n+1)]
        self.rank = [1] * (self.n+1)

    def find(self, n):
        while n != self.par[n]:
            n = self.par[n]
        return n

    def union(self, n1, n2):
        p1, p2 = self.find(n1), self.find(n2)

        if p1 == p2:
            return 0
        
        if self.rank[p1] >= self.rank[p2]:
            self.par[p2] = p1
            self.rank[p1] += self.rank[p2]
        else:
            self.par[p1] = p2
            self.rank[p2] += self.rank[p1]
        self.n -= 1
        return 1
    
    def connected(self):
        return self.n == 1


class Solution:
    def canTraverseAllPairs(self, nums: List[int]) -> bool:
        if len(nums) == 1:
            return True
        for n in nums:
            if n == 1:
                return False

        u = UnionFind(nums)
        primes = {}
        for i, n in enumerate(nums):
            for p in self.prime_factor(n):
                if p in primes:
                    u.union(i, primes[p])
                primes[p] = i
        return u.connected()


    def prime_factor(self, n):
        factors = []
        for i in range(2, int(sqrt(n))+1):
            if n == 1:
                break
            while n % i == 0:
                factors.append(i)
                n //= i  
        if n != 1:
            factors.append(n)     
        return factors
```
