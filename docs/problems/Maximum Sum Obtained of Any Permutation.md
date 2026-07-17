---
date: 2024-09-07
difficulty: Medium
num: 1589
related_topics:
  - Array
  - Greedy
  - Prefix Sum
  - Sorting
return: Done
---

# Problem: 1589. Maximum Sum Obtained Of Any Permutation

## Description

## Approach / Thoughts
use line sweep for 1 -1 range of queries

pair with max index

## Solution
```python
class Solution:
    def maxSumRangeQuery(self, nums: List[int], requests: List[List[int]]) -> int:
        ps = [0] * (len(nums) + 1)
        
        for s, e in requests:
            ps[s] += 1
            ps[e + 1] -= 1

        nums.sort(reverse=True)
        for i in range(1, len(ps)):
            ps[i] += ps[i - 1]

        indices = [(ps[i], i) for i in range(len(nums))]
        indices.sort(reverse=True)

        total = 0
        for j in range(len(nums)):
            total += (indices[j][0] * nums[j])
        return total % (10 ** 9 + 7)
```
