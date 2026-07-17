---
date: 2026-07-15
difficulty: Medium
num: 3867
related_topics:
  - Array
  - Math
  - Two Pointers
  - Sorting
  - Simulation
  - Number Theory
return:
---

# Problem: 3867. Sum of GCD of Formed Pairs

## Description
You are given an integer array `nums` of length `n`.

Construct an array `prefixGcd` where for each index `i`:

	- Let `mxi = max(nums[0], nums[1], ..., nums[i])`.

	- `prefixGcd[i] = gcd(nums[i], mxi)`.

After constructing `prefixGcd`:

	- Sort `prefixGcd` in **non-decreasing** order.

	- Form pairs by taking the **smallest unpaired** element and the **largest unpaired** element.

	- Repeat this process until no more pairs can be formed.

	- For each formed pair, **compute** the `gcd` of the two elements.

	- If `n` is odd, the **middle** element in the `prefixGcd` array remains **unpaired** and should be ignored.

Return an integer denoting the **sum of the GCD** values of all formed pairs.

The term `gcd(a, b)` denotes the **greatest common divisor** of `a` and `b`.

## Approach / Thoughts
simulate

## Solution
```python
class Solution:
    def gcdSum(self, nums: list[int]) -> int:
        n = len(nums)
        mx = nums[0]

        pgcd = []
        for i, x in enumerate(nums):
            mx = max(mx, x)
            pgcd.append(gcd(x, mx))
        pgcd.sort()

        l, r = 0, n-1
        res = 0

        while l < r:
            res += gcd(pgcd[l], pgcd[r])
            l += 1
            r -= 1
        return res
```