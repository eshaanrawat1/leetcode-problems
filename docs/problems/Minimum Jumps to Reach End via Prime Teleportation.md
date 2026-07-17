---
date: 2026-05-07
difficulty: Medium
num: 3629
related_topics:
  - Array
  - Hash Table
  - Math
  - Breadth-First Search
  - Number Theory
return:
---

# Problem: 3629. Minimum Jumps to Reach End via Prime Teleportation

## Description
You are given an integer array `nums` of length `n`.

You start at index 0, and your goal is to reach index `n - 1`.

From any index `i`, you may perform one of the following operations:

	**Adjacent Step**: Jump to index `i + 1` or `i - 1`, if the index is within bounds.

	**Prime Teleportation**: If `nums[i]` is a prime number `p`, you may instantly jump to any index `j != i` such that `nums[j] % p == 0`.

Return the **minimum** number of jumps required to reach index `n - 1`.

## Approach / Thoughts
sieve + preprocess valid indices to jump to 
for each num, check factors - if factor is prime, jump
bfs with seen - fastest way to get to index

## Solution
```python
class Solution:
    def minJumps(self, nums: List[int]) -> int:
        n = len(nums)
        m = max(nums)+1

        sieve = [1] * m
        sieve[0] = sieve[1] = 0

        for i in range(2, m):
            if sieve[i]:
                for j in range(i+i, m, i):
                    sieve[j] = 0

        primes = {i: [] for i,x in enumerate(sieve) if x}
        for i, x in enumerate(nums):
            if x in primes:
                primes[x].append(i)

        q = deque([(n-1, 0)])
        vis = {n-1}

        while q:
            idx, steps = q.popleft()

            if idx == 0:
                return steps

            num = nums[idx]
            for f1 in range(1, int(sqrt(num))+1):
                if num % f1 == 0:
                    f2 = num // f1

                    for f in [f1, f2]:
                        if f in primes:
                            for j in primes[f]:
                                if j not in vis:
                                    vis.add(j)
                                    q.append((j, steps+1))
            
            if idx-1 >= 0 and idx-1 not in vis:
                vis.add(idx-1)
                q.append((idx-1, steps+1))
            
            if idx+1 < n and idx+1 not in vis:
                vis.add(idx+1)
                q.append((idx+1, steps+1))
```