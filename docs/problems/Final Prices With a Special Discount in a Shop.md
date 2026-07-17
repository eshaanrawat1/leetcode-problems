---
date: 2024-12-17
difficulty: Easy
num: 1475
related_topics:
  - Array
  - Monotonic Stack
  - Stack
return: Done
---

# Problem: 1475. Final Prices With A Special Discount In A Shop

## Description

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        ans = []
        for i in range(len(prices)):
            res = prices[i]
            for j in range(i+1, len(prices)):
                if prices[j] <= prices[i]:
                    res -= prices[j]
                    break
            ans.append(res)
        return ans
```
