---
date: 2024-09-08
difficulty: Medium
num: 1674
related_topics:
  - Array
  - Hash Table
  - Prefix Sum
return: Review
---

# Problem: 1674. Minimum Moves To Make Array Complementary

## Description

## Approach / Thoughts
max num of moves is 2

check where num moves required changes for lo, mid, high

accumulate prefix sums

start at max num of moves, find local min

## Solution
```python
class Solution:
    def minMoves(self, nums: List[int], limit: int) -> int:
        ps = [0] * (limit * 2 + 2)

        for i in range(len(nums) // 2):
            l = nums[i]
            r = nums[~i]

            ps[min(l, r) + 1] -= 1
            ps[l + r] -= 1
            ps[l + r + 1] += 1
            ps[max(l, r) + limit + 1] += 1

        cur_min = total_min = len(nums)
        for i in range(2, len(ps)):
            cur_min += ps[i]
            total_min = min(total_min, cur_min)

        return total_min
```
