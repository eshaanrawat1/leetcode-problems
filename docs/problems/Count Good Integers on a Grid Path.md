---
date: 2026-04-21
difficulty: Hard
num: 3906
related_topics:
  - Dynamic Programming
return:
---

# Problem:  

## Description
You are given two integers `l` and `r`, and a string `directions` consisting of **exactly** three `'D'` characters and three `'R'` characters.

For each integer `x` in the range `[l, r]` (inclusive), perform the following steps:

1. If `x` has fewer than 16 digits, pad it on the left with **leading zeros** to obtain a 16-digit string.
2. Place the 16 digits into a `4 × 4` grid in **row-major** order (the first 4 digits form the first row from left to right, the next 4 digits form the second row, and so on).
3. Starting at the **top-left** cell (`row = 0`, `column = 0`), apply the 6 characters of `directions` in order:
    - `'D'` increments the row by 1.
    - `'R'` increments the column by 1.
4. Record the sequence of digits visited along the path (including the starting cell), producing a sequence of length 7.

The integer `x` is considered **good** if the recorded sequence is **non-decreasing**.

Return an integer representing the number of good integers in the range `[l, r]`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Digit DP]]

path is constant - only length 7 
track cell by cell left -> right, top -> bottom. 
- if on path, track prev (with limit for digit dp)
- off path, dont update prev

## Solution
```python
class Solution:
    def countGoodIntegersOnPath(self, l: int, r: int, directions: str) -> int:
        path, idx = {0}, 0
        for d in directions:
            idx += 4 if d == 'D' else 1
            path.add(idx)

        def func(x):
            s = str(x).zfill(16)
            
            @cache
            def dfs(i, prev, tight):
                if i == 16:
                    return 1

                res = 0
                limit = int(s[i]) if tight else 9

                for j in range(limit+1):
                    if i in path:
                        if j >= prev:
                            res += dfs(i+1, j, tight and (j == limit))
                    else:
                        res += dfs(i+1, prev, tight and (j == limit))
                return res
            
            return dfs(0, 0, True)

        return func(r) - func(l-1)