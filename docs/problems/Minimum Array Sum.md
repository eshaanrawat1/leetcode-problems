---
date: 2025-11-28
difficulty: Medium
num: 3366
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 3366. Minimum Array Sum

## Description
same - can either div 2 or sub k

## Approach / Thoughts
check every possible order of operations

## Solution
```python
class Solution:
    def minArraySum(self, nums: List[int], k: int, op1: int, op2: int) -> int:
        n = len(nums)

        @lru_cache(None)
        def dfs(i, o1, o2):
            if i >= n:
                return 0
            if o1 == 0 and o2 == 0:
                return sum(nums[i:])

            skip = nums[i] + dfs(i+1, o1, o2)
            t1 = t2 = t3 = t4 = inf

            if o1 > 0:
                t1 = ceil(nums[i] / 2) + dfs(i+1, o1-1, o2)
            
            if o2 > 0 and nums[i] >= k:
                t2 = nums[i] - k + dfs(i+1, o1, o2-1)

            if o1 > 0 and (o2 > 0 and nums[i] >= k):
                v3 = ceil(nums[i] / 2) 
                if v3 >= k:
                    t3 = v3 - k + dfs(i+1, o1-1, o2-1)
                
                t4 = ceil((nums[i] - k) / 2) + dfs(i+1, o1-1, o2-1)
            
            return min(t1, t2, t3, t4, skip)

        return dfs(0, op1, op2)
```
