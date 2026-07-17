---
date: 2026-05-30
difficulty: Medium
num: 2939
related_topics:
  - Math
  - Greedy
  - Bit Manipulation
return:
---

# Problem: 2939. Maximum Xor Product

## Description
Given three integers `a`, `b`, and `n`, return *the **maximum value** of* `(a XOR x) * (b XOR x)` *where* `0 <= x < 2n`.

Since the answer may be too large, return it **modulo** `109 + 7`.

**Note** that `XOR` is the bitwise XOR operation.

## Approach / Thoughts
compare a and b 
- first set all the bits up to n (bits that x cant change)
- then iterate from most to least significant
- if same value, assign 1 xor benefits both 
- otherwise give to the smaller, this always brings up the total product

## Solution
```python
class Solution:
    def maximumXorProduct(self, a: int, b: int, n: int) -> int:

        A = B = 0
        for i in range(52, n-1, -1):
            if a & (1 << i):
                A |= (1 << i)

            if b & (1 << i):
                B |= (1 << i)

        
        mod = 10**9+7
        for i in range(n-1, -1, -1):
            if a & (1 << i) == b & (1 << i):
                A |= (1 << i)
                B |= (1 << i)

            else:
                if A <= B:
                    A |= (1 << i)
                else:
                    B |= (1 << i)
        return A*B % mod
```