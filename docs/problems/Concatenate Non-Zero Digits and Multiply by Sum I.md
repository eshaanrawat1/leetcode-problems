---
date: 2026-07-06
difficulty: Easy
num: 3754
related_topics:
  - Math
return:
---

# Problem: 3754. Concatenate Non-Zero Digits and Multiply by Sum I

## Description
You are given an integer `n`.

Form a new integer `x` by concatenating all the **non-zero digits** of `n` in their original order. If there are no **non-zero** digits, `x = 0`.

Let `sum` be the **sum of digits** in `x`.

Return an integer representing the value of `x * sum`.

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def sumAndMultiply(self, n: int) -> int:
        x = int(''.join([c for c in str(n) if c != '0']) or '0')
        s = sum(int(c) for c in str(x))
        return x * s
```