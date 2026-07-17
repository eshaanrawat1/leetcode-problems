---
date: 2025-01-29
difficulty: Hard
num: 3414
related_topics:
  - Array
  - Binary Search
  - Dynamic Programming
  - Sorting
return: Review
---

# Problem: 3414. Maximum Score Of Non Overlapping Intervals

## Description

## Approach / Thoughts
dp + binary search

return index and use negatives for finding min lexicographic

## Solution
```python
class Solution:
    def maximumWeight(self, intervals: List[List[int]]) -> List[int]:
        seen = {}
        for i, x in enumerate(intervals):
            if tuple(x) not in seen:
                seen[tuple(x)] = i

        nums = sorted(seen)
        n = len(nums)


        @lru_cache(None)
        def dfs(i, cnt):
            if i >= n or cnt == 4:
                return [0, []]

            s,e,w = nums[i]
            j = bisect_right(nums, (e+1, ))

            skip = dfs(i + 1, cnt)
            take = dfs(j, cnt + 1)

            take_cpy = [take[0] - w, take[1][:]]
            insort(take_cpy[1], seen[nums[i]])

            return min(take_cpy, skip)

        return list(dfs(0, 0)[1])
```
