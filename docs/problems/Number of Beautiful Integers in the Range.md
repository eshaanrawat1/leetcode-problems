---
date: 2026-06-05
difficulty: Hard
num: 2827
related_topics:
  - Math
  - Dynamic Programming
return:
---

# Problem: 2827. Number of Beautiful Integers in the Range

## Description
You are given positive integers `low`, `high`, and `k`.

A number is **beautiful** if it meets both of the following conditions:

	- The count of even digits in the number is equal to the count of odd digits.

	- The number is divisible by `k`.

Return *the number of beautiful integers in the range* `[low, high]`.

## Approach / Thoughts
[[Digit DP]]

digit dp problem
- tight and bounds are easy follow the same prefix approach f(r) - f(l-1) to give range
- leading 0 has to be taken care of since they don't add the even count position 
- the key intuition is that remainder for division can be done rolling
- imagine building out a number (a x 10) + d and keep doing this and take mod at the end - can just take mod at each individual step
	- originally used last two digits but thats not a guarantee for div

## Solution
```python
class Solution:
    def numberOfBeautifulIntegers(self, low, high, k):

        def f(num):
            s = str(num)
            n = len(s)

            @lru_cache(None)
            def dp(i, tight, cnt, rem, l0):
                if i >= n:
                    if l0:
                        return 0
                    return int(rem == 0 and cnt == 0)

                res = 0
                lim = int(s[i]) if tight else 9

                for j in range(lim+1):
                    t = tight and j == lim
                    nl0 = l0 and j == 0
                    nrem = (rem * 10 + j) % k

                    if nl0:
                        res += dp(i+1, t, cnt, nrem, nl0)
                        continue

                    if j & 1:
                        res += dp(i+1, t, cnt+1, nrem, nl0)
                    else:
                        res += dp(i+1, t, cnt-1, nrem, nl0)
                return res
            
            return dp(0, True, 0, 0, True)

        return f(high) - f(max(low-1, 0))
```