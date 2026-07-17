---
date: 2026-04-27
difficulty: Easy
num: 3908
related_topics:
  - Array
  - String
return:
---

# Problem:  

## Description
You are given an integer `n` and a digit `x`.

A number is considered **valid** if:

- It contains **at least one** occurrence of digit `x`, and
- It **does not start** with digit `x`.

Return `true` if `n` is **valid**, otherwise return `false`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Biweekly Contest 181]]

convert to string and check conditions

## Solution
```python
class Solution:
    def validDigit(self, n: int, x: int) -> bool:
        # 0:37
        
        s = str(n)
        x = str(x)
        return x in s and s[0] != x