---
date: 2026-07-02
difficulty: Hard
num: 1449
related_topics:
  - Array
  - Dynamic Programming
return:
---

# Problem: 1449. Form Largest Integer With Digits That Add up to Target

## Description
Given an array of integers `cost` and an integer `target`, return *the **maximum** integer you can paint under the following rules*:

	- The cost of painting a digit `(i + 1)` is given by `cost[i]` (**0-indexed**).

	- The total cost used must be equal to `target`.

	- The integer does not have `0` digits.

Since the answer may be very large, return it as a string. If there is no way to paint any integer given the condition, return `"0"`.

## Approach / Thoughts
dp keep track of remaining budget - use string comparison to see if its valid
special pruning case - always want decreasing number and if theres a 1, that's the longest possible sum

## Solution
```python
class Solution:
    def largestNumber(self, cost: List[int], target: int) -> str:
        # obs
        # always mono decreasing if we can have 123, 321 is valid
        # so can put i in dfs state instead of repeat loop 
        # find longest possible integer
        # if we;ve seen a cost before, only keep bigger number in set
        # ie if 8 costs 2 and 4 costs 2, always take 8
        # if a number has cost 1, just fill with that

        # dont need to cache num?
        # dp[i][rem] -> best number i can make with budget rem
        # and with <= i digits

        mx, mc = 10**8, -1
        cost = [mx] + cost

        seen = set()
        for i in range(len(cost)-1, -1, -1):
            if cost[i] == 1:
                mc = max(mc, i)

            if cost[i] in seen:
                cost[i] = mx
            seen.add(cost[i])

        if mc != -1:
            return str(mc) * target

        def cmp_int(x, y):
            if not x and not y: return ""
            if not x: return y if y[-1] != '0' else "0"
            if not y: return x if x[-1] != '0' else "0"

            if x[-1] == y[-1] == '0': return "0"
            if x[-1] == '0': return y
            if y[-1] == '0': return x

            if len(x) > len(y): return x
            if len(y) > len(x): return y
            return max(x, y)


        @lru_cache(None)
        def dfs(i, rem):
            if rem == 0:
                return ""
            
            if rem < 0 or i == 0:
                return "0"

            res = "0"

            amt = rem // cost[i]
            for j in range(amt+1):
                ans = str(i) * j + dfs(i-1, rem - j * cost[i])
                res = cmp_int(res, ans)
            return res
            
        return dfs(9, target)
```