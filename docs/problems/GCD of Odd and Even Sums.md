---
date: 2026-07-15
difficulty: Easy
num: 3658
related_topics:
  - Math
  - Number Theory
return:
---

# Problem: 3658. GCD of Odd and Even Sums

## Description
You are given an integer `n`. Your task is to compute the **GCD** (greatest common divisor) of two values:

	- `sumOdd`: the sum of the smallest `n` positive odd numbers.

	- `sumEven`: the sum of the smallest `n` positive even numbers.

Return the GCD of `sumOdd` and `sumEven`.

## Approach / Thoughts
some math to calc odd even

## Solution
```python
class Solution:
    def gcdOfOddEvenSums(self, n: int) -> int:
        # 1 o(1) = 1
        # 2 o(3) = 4
        # 3 o(5) = 9
        # 4 o(7) = 16
        # 5 o(9) = 25

        # n=16
        # 1+3+5+7+9+11+13+15


        # 1 e(2) = 2
        # 2 e(4) = 6
        # 3 e(6) = 12
        # 4 e(8) = 20
        # 5 e(10) = 30
        # 6 e(12) = 42

     
        oddSum = n ** 2
        evenSum = n * (n+1)
        return gcd(oddSum, evenSum)
```