---
date: 2024-09-04
difficulty: Medium
num: 1049
related_topics:
  - Array
  - Dynamic Programming
return: Review
---

# Problem: 1049. Last Stone Weight Ii

## Description
break stones

## Approach / Thoughts
find halfway point

pick and choose path that is closest to half

## Solution
```python
class Solution:
    def lastStoneWeightII(self, stones: List[int]) -> int:
        stone_sum = sum(stones)
        half = ceil(stone_sum / 2)

        @cache
        def dfs(i, total):
            if i >= len(stones) or total >= half:
                return abs(total - (stone_sum - total))

            skip = dfs(i + 1, total)
            take = dfs(i + 1, stones[i] + total)

            return min(skip, take)
        
        return dfs(0, 0)
```
