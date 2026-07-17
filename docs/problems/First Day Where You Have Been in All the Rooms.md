---
date: 2026-07-14
difficulty: Medium
num: 1997
related_topics:
  - Array
  - Dynamic Programming
return: Review
---

# Problem: 1997. First Day Where You Have Been in All the Rooms

## Description
There are `n` rooms you need to visit, labeled from `0` to `n - 1`. Each day is labeled, starting from `0`. You will go in and visit one room a day.

Initially on day `0`, you visit room `0`. The **order** you visit the rooms for the coming days is determined by the following **rules** and a given **0-indexed** array `nextVisit` of length `n`:

	- Assuming that on a day, you visit room `i`,

	- if you have been in room `i` an **odd** number of times (**including** the current visit), on the **next** day you will visit a room with a **lower or equal room number** specified by `nextVisit[i]` where `0 <= nextVisit[i] <= i`;

	- if you have been in room `i` an **even** number of times (**including** the current visit), on the **next** day you will visit room `(i + 1) mod n`.

Return *the label of the **first** day where you have been in **all** the rooms*. It can be shown that such a day exists. Since the answer may be very large, return it **modulo** `109 + 7`.

## Approach / Thoughts
use dp recurrence relation since the only way to get from room i-1 to i is with an even parity, due to constraints of next visit only moving to the same room or backwards

for a given room - we need to go from i-1 to nextVisit i-1 (add 1) and take the prefix sum difference to get how many steps it took to get from nextVisit i-1 to i-1. since we are at i-1 for the second time, add 1 to get from i-1 to i, and include the total effort to have reached i-1 the first time

dp i is the steps needed to reach i for the first time

## Solution
```python
class Solution:
    def firstDayBeenInAllRooms(self, nextVisit: List[int]) -> int:

        # brute force fails tle - too many repeating states
        # maybe use dp
        # dp[i][parity] min steps to reach i, with parity p (0 or 1)

        # have to start at 0
        # some kind of doubling logic 
        # if takes x days to reach for first time, 2x for second?

        # some sort of weighted edge graph traversal
        # similar to brute force
        # initially start at every cell odd - how many iters
        # does it take to get to this cell even, maybe back to dp?

        # dp[i][odd] = 1 + dp[i-1][even] 
        # dp[i][odd] = 1 + dp[prev][odd]

        # dp[i][even] = 2 * dp[i][odd]


        n = len(nextVisit)
        mod = 10**9+7
        dp = [0] * n

        # dp[i] -> how long it took to get to i
        # key constraint - can only go forward via evens
        # dp[i] = 
        #   1 + dp[i-1] - dp[nextVisit[i-1]]
        #   we take one step to go from i-1 to nextVisit[i-1]
        #   the dist to get from nextVisit[i-1] to i-1
        #   is dp[i-1] - dp[nextVisit[i-1]] acting like prefix sum
        #   where 0..i-1 is total dist
        #
        #   now we are at i-1 for the second time
        #   we add +1 to get from i-1 to i
        #   also add dp[i-1] for the cumulative steps to get to 
        #   that point

        for i in range(1, n):
            dp[i] = 2 * dp[i-1] + 2 - dp[nextVisit[i-1]]
            dp[i] %= mod
        return dp[-1]
```