---
date: 2025-06-21
difficulty: Medium
num: 3583
related_topics:
  - Array
  - Counting
  - Hash Table
return: Done
---

# Problem: 3583. Count Special Triplets

## Description
same, where triplet goes 2x, x, 2x

## Approach / Thoughts
keep track of indices of each number

treat every number as a potential midpoint, binary search on indices to left and right and multiply to count

## Solution
```python
class Solution:
    def specialTriplets(self, nums: List[int]) -> int:
        res, MOD = 0, 10 ** 9 + 7

        cnt = Counter()
        idx = defaultdict(list)

        for i, n in enumerate(nums):            
            cnt[n] += 1
            idx[n].append(i)

        for n in cnt:
            if n == 0:
                continue

            v = n * 2
            if v in cnt:
                for j in idx[n]:
                    indices = idx[v]
                    split_idx = bisect_left(indices, j)

                    num_left = split_idx
                    num_right = len(indices) - num_left

                    res += (num_left * num_right) % MOD         
        
        zero_cnt = cnt[0]
        for i in range(zero_cnt - 2):
            v = zero_cnt - (i + 1)
            res += (v * (v-1) // 2) % MOD
        return res % MOD
```
