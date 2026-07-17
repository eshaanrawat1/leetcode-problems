---
date: 2024-12-24
difficulty: Medium
num: 1498
related_topics:
  - Array
  - Binary Search
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 1498. Number Of Subsequences That Satisfy The Given Sum Condition

## Description
where min and max sum ≤ target

## Approach / Thoughts
sort since combinations

two pointer and exponents

## Solution
```python
class Solution:
    def numSubseq(self, nums: List[int], target: int) -> int:
        nums.sort()
        
        i, j = 0, len(nums)-1
        res = 0

        while i <= j:
            if nums[i] + nums[j] > target:
                j -= 1
            else:
                res += 2 ** (j - i)
                i += 1
        return res % (10 ** 9 + 7)
```
