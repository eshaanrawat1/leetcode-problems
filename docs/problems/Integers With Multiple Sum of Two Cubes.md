---
date: 2026-04-07
difficulty: Medium
num: 3890
related_topics:
  - Math
return:
---

# Problem:  

## Description
You are given an integer `n`.

An integer `x` is considered **good** if there exist **at least** two **distinct** pairs `(a, b)` such that:

- `a` and `b` are positive integers.
- `a <= b`
- `x = a3 + b3`

Return an array containing all good integers **less than or equal to** `n`, sorted in ascending order.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
brute force cubes

## Solution
```python
class Solution:
    def findGoodIntegers(self, n: int) -> list[int]:
        # 4:46
        
        upper = ceil(math.cbrt(n)) + 2
        cnt = Counter()

        for i in range(1, upper):
            for j in range(i+1, upper):
                cnt[(i**3 + j**3)] += 1
        return sorted([k for k,v in cnt.items() if (v > 1 and k <= n)])