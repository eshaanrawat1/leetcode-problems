---
date: 2025-12-25
difficulty: Hard
num: 996
related_topics:
  - Array
  - Backtracking
  - Bit Manipulation
  - Bitmask
  - Dynamic Programming
  - Hash Table
  - Math
return: Done
---

# Problem: 996. Number Of Squareful Arrays

## Description
same, adjacent elements perfect squares

## Approach / Thoughts
dp bitmask, eliminate duplicates, 0 before 1 not 1 before 0

## Solution
```python
class Solution:
    def numSquarefulPerms(self, nums: List[int]) -> int:
        n = len(nums)
        nums.sort()

        def perfect_square(x, y):
            return sqrt(x+y) == int(sqrt(x+y))

        @lru_cache(None)
        def dfs(seen, prev):
            if seen == (1 << n) - 1:
                return 1

            res = 0
            for i, x in enumerate(nums):
                if (1 << i) & seen:
                    continue

                if i > 0 and nums[i] == nums[i-1] and not (1 << (i-1) & seen):
                    continue

                if prev == -1 or perfect_square(x, prev):
                    res += dfs(seen | (1 << i), x)
            return res

        return dfs(0, -1)
```
