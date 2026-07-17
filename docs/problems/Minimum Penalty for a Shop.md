---
date: 2025-03-22
difficulty: Medium
num: 2483
related_topics:
  - Prefix Sum
  - String
return: Done
---

# Problem: 2483. Minimum Penalty For A Shop

## Description
same, which day to close shop

every hour with no customers, penalty +1, same for close with customers

## Approach / Thoughts
prefix sum for yes and no customers independently

penalty is number of customers left out + not present

## Solution
```python
class Solution:
    def bestClosingTime(self, customers: str) -> int:
        n = len(customers)
        mapping = {'Y':1, 'N':0}
    
        # yes = 1 1 0 1
        # no  = 0 0 1 0

        # 1 2 2 3
        # 0 0 1 1

        totaly = customers.count('Y')
        totaln = n - totaly

        ps1 = [mapping[c] for c in customers]
        ps2 = [1 - mapping[c] for c in customers]

        for i in range(1, n):
            ps1[i] += ps1[i-1]
            ps2[i] += ps2[i-1]

        res, hour = totaly, 0
        for i in range(n):
            penalty = (totaly - ps1[i] + ps2[i])
            if penalty < res:
                res = penalty
                hour = i+1

        return hour
```
