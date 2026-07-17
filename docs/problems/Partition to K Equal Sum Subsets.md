---
date: 2025-12-25
difficulty: Medium
num: 698
related_topics:
  - Array
  - Backtracking
  - Bit Manipulation
  - Bitmask
  - Dynamic Programming
  - Memoization
return: Done
---

# Problem: 698. Partition To K Equal Sum Subsets

## Description

## Approach / Thoughts
k isn’t a factor - equal subsets of all used nums must be k don’t need to track in dp state

state tracks bitmask used nums and cur_sum

if cur_sum == 0, reset, if used all nums return cur_sum == 0

  

proof for k

assume S = sum(nums), k = number of subsets

we have x disjoint sets so x * target = S

x * S/k = S, x = k

## Solution
```python
class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        total = sum(nums)
        if total % k != 0:
            return False

        target = total // k

        n = len(nums)
        nums.sort()
        if nums[-1] > target:
            return False

        @lru_cache(None)
        def dfs(used, cur_sum):
            if cur_sum == target:
                return dfs(used, 0)

            if used == (1 << n) - 1:
                return cur_sum == 0

            res = False
            for i, x in enumerate(nums):
                if not (1 << i) & used:
                    res = res or dfs(used | (1 << i), cur_sum + x)
            return res
    
        return dfs(0, 0)
```
