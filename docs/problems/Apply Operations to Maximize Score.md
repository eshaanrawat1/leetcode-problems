---
date: 2025-03-29
difficulty: Hard
num: 2818
related_topics:
  - Array
  - Greedy
  - Math
  - Monotonic Stack
  - Number Theory
  - Sorting
  - Stack
return: Review
---

# Problem: 2818. Apply Operations To Maximize Score

## Description
same, can pick any subarray not chosen before and multiply number of highest prime score in subarray

## Approach / Thoughts
mono stack to find the left and right bounds using prime score

heap to greedy take biggest numbers

## Solution
```python
class Solution:
    def maximumScore(self, nums: List[int], k: int) -> int:
        n, mod = len(nums), (10 ** 9 + 7)

        # prime scores
        def prime_score(num):
            cnt = 0
            for i in range(2, int(sqrt(num))+1):
                if num % i == 0:
                    cnt += 1
                    while num % i == 0:
                        num //= i
            return (cnt + 1) if num >= 2 else cnt

        primes = [prime_score(x) for x in nums]

        # mono stack
        left = [-1] * n
        right = [n] * n
        stack = []

        for i, p in enumerate(primes):
            while stack and p > primes[stack[-1]]:
                idx = stack.pop()
                right[idx] = i

            if stack:
                left[i] = stack[-1]
            stack.append(i)

        
        # heap logic
        pq = [(-nums[i], i) for i in range(n)]
        heapq.heapify(pq)

        # greedy take
        res = 1
        while k > 0:
            num, idx = heapq.heappop(pq)
            num *= -1

            uses = (idx - left[idx]) * (right[idx] - idx)
            uses = min(uses, k)

            res = (res * pow(num, uses, mod)) % mod
            k -= uses

        return res
```
