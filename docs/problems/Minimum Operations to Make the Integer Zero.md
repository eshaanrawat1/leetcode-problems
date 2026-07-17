---
date: 2026-06-11
difficulty: Medium
num: 2749
related_topics:
  - Bit Manipulation
  - Brainteaser
  - Enumeration
return:
---

# Problem: 2749. Minimum Operations to Make the Integer Zero

## Description
You are given two integers `num1` and `num2`.

In one operation, you can choose integer `i` in the range `[0, 60]` and subtract `2i + num2` from `num1`.

Return *the integer denoting the **minimum** number of operations needed to make* `num1` *equal to* `0`.

If it is impossible to make `num1` equal to `0`, return `-1`.

## Approach / Thoughts
clever rearrange of number formula to exploit the fact that any number can be made up of sums of powers of 2

picture below shows that when we subtract k powers of 2 + some number from n1, we can use the distributive formula which breaks into k powers of 2 and `k * n2` - move to left side and now we have a number `n1 - k * n2` which can be arranged as k powers of 2. 

the number has a bitcount, and if that bitcount is <= k, we can also use splitting (ie say we have bit 5 = 32 set, we can always do more by getting 16,16 from). however if we have the number as something like 53, and k=52 we cant make the number no matter what - since its too big, even with 52 1s.
![[Screenshot 2026-06-11 at 3.02.02 PM.png]]
## Solution
```python
class Solution:
    def makeTheIntegerZero(self, num1: int, num2: int) -> int:
        for i in range(35):
            r = num1 - i * num2
            if r.bit_count() <= i <= r:
                return i
        return -1
```