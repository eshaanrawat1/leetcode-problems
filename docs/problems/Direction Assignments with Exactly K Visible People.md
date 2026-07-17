---
date: 2026-04-16
difficulty: Medium
num: 3881
related_topics:
  - Math
  - Combinatorics
return:
---

# Problem:  

## Description
You are given three integers `n`, `pos`, and `k`.

There are `n` people standing in a line indexed from 0 to `n - 1`. Each person **independently** chooses a direction:

- `'L'`: **visible** only to people on their **right**
- `'R'`: **visible** only to people on their **left**

A person at index `pos` sees others as follows:

- A person `i < pos` is visible if and only if they choose `'L'`.
- A person `i > pos` is visible if and only if they choose `'R'`.

Return the number of possible direction assignments such that the person at index `pos` sees **exactly** `k` people.

Since the answer may be large, return it **modulo** `109 + 7`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
left positions * right positions
use mod inv for fast combinations - precompute factorials

## Solution
```python
class Solution:
    def countVisiblePeople(self, n: int, pos: int, k: int) -> int:
        mod = 10**9+7

        res = 0
        pl = pos
        pr = n - pos - 1

        factorials = {0:1, 1:1, 2:2}
        cur = 2
        for i in range(3, n+1):
            cur = (cur * i) % mod
            factorials[i] = cur

        def modinv(x):
            return pow(x, mod-2, mod)

        def fast_comb(n1, k1):
            return factorials[n1] * modinv(factorials[k1]) % mod * modinv(factorials[n1-k1]) % mod

        for i in range(k+1):
            l = i
            r = k-i

            if l > pl or r > pr:
                continue

            lc = fast_comb(pl, l)
            rc = fast_comb(pr, r) 
            res += (lc * rc) % mod
        return (2 * res) % mod

            