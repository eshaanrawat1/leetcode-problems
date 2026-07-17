---
date: 2025-04-22
difficulty: Medium
num: 1887
related_topics:
  - Array
  - Sorting
return: Done
---

# Problem: 1887. Reduction Operations To Make The Array Elements Equal

## Description
same, can reduce one number to smaller below

## Approach / Thoughts
unique elements and count, number of steps to reach

## Solution
```python
class Solution:
    def reductionOperations(self, nums: List[int]) -> int:
        cnt = Counter(nums)
        cur_min = min(nums)

        res, N = 0, len(cnt)
        for i, n in enumerate(sorted(cnt)):
            if n == cur_min:
                continue

            res += (cnt[n] * i)
        return res
```
