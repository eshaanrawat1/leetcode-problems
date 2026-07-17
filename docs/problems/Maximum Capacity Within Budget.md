---
date: 2026-01-22
difficulty: Medium
num: 3814
related_topics:
  - Array
  - Binary Search
return: Done
---

# Problem: 3814. Maximum Capacity Within Budget

## Description

## Approach / Thoughts
prefix sum binary search - look to left to avoid double count

## Solution
```python
class Solution:
    def maxCapacity(self, costs: List[int], capacity: List[int], budget: int) -> int:
        n = len(costs)

        scost = []
        scap = []
        for x, y in sorted(zip(costs, capacity)):
            scost.append(x)
            scap.append(y)

        max_cap = [0] * n
        max_cap[0] = scap[0]
        for i in range(1, n):
            max_cap[i] = max(max_cap[i-1], scap[i])

        res = 0
        for i in range(n):
            cur_cost = scost[i]
            cur_cap = scap[i]

            if cur_cost < budget:
                res = max(res, cur_cap)
            else:
                break

            rem = budget - cur_cost - 1
            idx = bisect_right(scost, rem, lo=0, hi=i)-1

            if 0 <= idx <= i-1:
                res = max(res, cur_cap + max_cap[idx])
        return res
            
```
