---
date: 2025-11-25
difficulty: Medium
num: 3592
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 3592. Inverse Coin Change

## Description
same, given num ways return denoms

## Approach / Thoughts
check all cases, if missing one way, add the denom and consider edge cases

## Solution
```python
class Solution:
    def findCoins(self, numWays: List[int]) -> List[int]:

        denoms = []

        @lru_cache(None)
        def count_ways(i, cur, target):
            if i >= len(denoms) or cur > target:
                return 0
            
            if cur == target:
                return 1

            take = count_ways(i, cur + denoms[i], target)
            skip = count_ways(i+1, cur, target)
            return take + skip

        
        for i, n in enumerate(numWays):
            coin_val = i+1
            ways = count_ways(0, 0, coin_val)

            if n == 0:
                if ways > 0:
                    return []

            elif n == 1:
                if ways == 0:
                    denoms.append(coin_val)
                elif ways == 1:
                    continue
                else:
                    return []

            else:
                if ways == n:
                    continue
                elif ways+1 == n:
                    denoms.append(coin_val)
                else:
                    return []

        return denoms
```
