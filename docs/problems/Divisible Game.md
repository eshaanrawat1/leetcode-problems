---
date: "2026-07-07"
difficulty: "Medium"
rating: 1400
num: "3984"
related_topics:
  - "kadane"
  - "factors"
  - "prefix-sum"
return:
---

# Problem: 3984. Divisible Game

## Approach / Thoughts

precompute the score for every factor using kadane - take best one
kadane resets when score is low - the max difference score automatically takes into account by kadane -> can either use primes or factors

## Solution

```python
class Solution:
    def divisibleGame(self, nums: list[int]) -> int:
        mod = 10**9+7
        n = len(nums)

        factors = {2}
        for i, x in enumerate(nums):
            factors.add(x)
            for f in range(2, int(sqrt(x)+1)+1):
                if x % f == 0:
                    factors.add(f)
                    factors.add(x // f)
        factors.discard(1)

        def score(f):
            res, cur = -inf, 0
            for i, x in enumerate(nums):
                if x % f == 0:
                    cur += x
                else:
                    cur -= x
                res = max(res, cur)
                cur = max(cur, 0)
            return res


        bf = bs = -inf
        for f in sorted(factors):
            s = score(f)
            if s > bs:
                bf = f
                bs = s
        return bs * bf % mod
```
