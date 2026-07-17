---
date: 2026-06-09
difficulty: Easy
num: 3954
related_topics:
  - 
return:
---

# Problem: 3954. Sum of Compatible Numbers in Range I

## Description
You are given two integers `n` and `k`.

A **positive** integer `x` is called **compatible** if it satisfies both of the following conditions:

    - `abs(n - x) 
**Input:** n = 2, k = 3

**Output:** 10

**Explanation:**

The compatible integers are:

	- `x = 1`, since `abs(2 - 1) = 1` and `2 & 1 = 0`.

	- `x = 4`, since `abs(2 - 4) = 2` and `2 & 4 = 0`.

	- `x = 5`, since `abs(2 - 5) = 3` and `2 & 5 = 0`.

Thus, the answer is `1 + 4 + 5 = 10`.

## Approach / Thoughts
[[Weekly Contest 505]]

brute force

## Solution
```python
class Solution:
    def sumOfGoodIntegers(self, n: int, k: int) -> int:

        res = 0
        for i in range(1001):
            if abs(n - i) <= k and (n & i) == 0:
                res += i
        return res
```