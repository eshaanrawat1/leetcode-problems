---
date: 2026-05-05
difficulty: Medium
num: 788
related_topics:
  - Math
  - Dynamic Programming
return:
---

# Problem:  

## Description
An integer `x` is a **good** if after rotating each digit individually by 180 degrees, we get a valid number that is different from `x`. Each digit must be rotated - we cannot choose to leave it alone.

A number is valid if each digit remains a digit after rotation. For example:

- `0`, `1`, and `8` rotate to themselves,
- `2` and `5` rotate to each other (in this case they are rotated in a different direction, in other words, `2` or `5` gets mirrored),
- `6` and `9` rotate to each other, and
- the rest of the numbers do not rotate to any other number and become invalid.

Given an integer `n`, return _the number of **good** integers in the range_ `[1, n]`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Weekly Contest 73]]


brute force check digits

## Solution
```python
class Solution:
    def rotatedDigits(self, n: int) -> int:

        def is_good(num):
            s = str(num)
            cur = ''
            for c in s:
                if c in '018':
                    cur += c
                    
                elif c == '2':
                    cur += '5'
                    
                elif c == '5':
                    cur += '2'

                elif c == '6':
                    cur += '9'

                elif c == '9':
                    cur += '6'

                else:
                    return None

            return int(cur)

        res = 0
        for i in range(1, n+1):
            isg = is_good(i)
            if isg is not None and isg != i:
                res += 1
        return res