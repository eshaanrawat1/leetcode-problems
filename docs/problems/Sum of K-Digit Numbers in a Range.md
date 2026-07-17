---
date: 2026-07-09
difficulty: Hard
num: 3855
related_topics:
  - Math
  - Divide and Conquer
  - Combinatorics
  - Number Theory
return:
---

# Problem: 3855. Sum of K-Digit Numbers in a Range

## Description
You are given three integers `l`, `r`, and `k`.

Consider all possible integers consisting of **exactly** `k` digits, where each digit is chosen independently from the integer range `[l, r]` (inclusive). If 0 is included in the range, leading zeros are allowed.

Return an integer representing the **sum of all such numbers.**​​​​​​​ Since the answer may be very large, return it **modulo** `109 + 7`.

## Approach / Thoughts
interesting problems - constraints meant i knew it had to be some sort of digit dp or combinatorics - digit dp didn't make much sense but i simulated some examples and got the constructive proof for how much each number contributes through combinatorics

if a number is at the ones position and there are 4 total slots, then the total contributions is 3^n
where n is the total numbers we have (r-l+1) -> keep adding this and we get that
- ones place is (r-l+1)^k-1 * 1 * 3
- tens place is (r-l+1)^k-1 * 10 * 3
- ... and so on
redistributing terms we get 1ab + 10ab + 100ab ...
which goes to 111ab -> this number is called repunit and can be made by (10^n -1) / 9
use some mod inv tricks for safety and just compute
## Solution
```python
class Solution:
    def sumOfNumbers(self, l: int, r: int, k: int) -> int:
        # some sort of digit dp or counting combinatorics 
        # how much does each number from l to r contribute 
        # to the sum

        # _ _ _ _ _ 
        # 3,7 -> 5
        
        # 3
        # ones place = 5^4 * 3
        # tens place = 5^4 * 30

        # ab + 10ab + 100ab + 1000ab + 10000ab
        # 1 + 10 + 100 
        # 11111 ... 111 (k)
        # repunit = Rn = 10^n - 1 / 9
        # maybe use mod inv?
        # solved 31:16

        # for each digit d
        #   sum += d * (r-l+1)^(k-1) * 111111...111

        mod = 10**9+7

        inv9 = pow(9, mod-2, mod)
        ans = (pow(10, k, mod) - 1 + mod) % mod
        ans = ans * inv9 % mod
        t = pow(r-l+1, k-1, mod)

        res = 0
        for d in range(l, r+1):
            res += (d * t * ans) % mod
        return res % mod
```