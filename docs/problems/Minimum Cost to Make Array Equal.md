---
date: 2026-06-22
difficulty: Hard
num: 2448
related_topics:
  - Array
  - Binary Search
  - Greedy
  - Sorting
  - Prefix Sum
return:
---

# Problem: 2448. Minimum Cost to Make Array Equal

## Description
You are given two **0-indexed** arrays `nums` and `cost` consisting each of `n` **positive** integers.

You can do the following operation **any** number of times:

	- Increase or decrease **any** element of the array `nums` by `1`.

The cost of doing one operation on the `ith` element is `cost[i]`.

Return *the **minimum** total cost such that all the elements of the array *`nums`* become **equal***.

## Approach / Thoughts
find a formula to see how much the cost of the left increases - this can be derived by a few properties
- add the number that just changed (previously we tried to make every number to index i, now try to make it to index i+1, so we need to add how much index i adds)
- update the previous lcost - that remains unchanged
- also every cost is multiplied by the factor which just got increased, ie if we jump from 4 to 7, we multiply 3 by the running sum of costs so far
- do that left to right and right to left

also there is a solution for binary search since the cost function is convex
- convex is some sort of quadratic type slope
- second derivative, or solve at every point is always increasing - in a bowl type shape
- can use trinary search to find the absolute minimum  - if f(mid) <= f(mid+1) move left, else move right - repeat until we find the bottom of the bowl

## Solution
```python
class Solution:
    def minCost(self, nums: List[int], cost: List[int]) -> int:
        # 44:30
        # if cost = 1, make the median 
        # use some sort of prefix sum to calculate the 
        # cost of reaching every other number

        # sorting needed
        # how does left cost change as we move left
        # how much does right cost change 

        # 1  4 8 15 20
        # 2 14 3 1  5

        # 2
        # 2+14 = 16

        # lcost
        # 1: 0
        # 4: 3*2 = 6
        # 8: 7*2 + 4*14  = 70      ->   4*2 + lcost(4) + 4*14
        # 15: 14*2 + 11*14 + 7*3 = 203  -> 7*16 + lcost(8) + 7*3
        # 20: 19*2 + 16*14 + 12*3 + 5*1

        n = len(nums)
        A = sorted([(x, y) for x, y in zip(nums, cost)])

        def calc(A):
            lcost = [0]

            cur = 0
            for i in range(1, n):
                x1, y1 = A[i-1]
                x2, y2 = A[i]
                
                diff = abs(x2 - x1)
                lcost.append(diff * cur + lcost[-1] + diff * y1)
                cur += y1
            
            return lcost

        lc = (calc(A))
        rc = (calc(A[::-1]))[::-1]
        return min((x+y) for x,y in zip(lc, rc))
```