---
date: 2024-10-30
difficulty: Hard
num: 1671
related_topics:
  - Array
  - Binary Search
  - Dynamic Programming
  - Greedy
return: Done
---

# Problem: 1671. Minimum Number Of Removals To Make Mountain Array

## Description

## Approach / Thoughts
lis for every index

## Solution
```python
class Solution:
    def minimumMountainRemovals(self, nums: List[int]) -> int:
        
        def lis(nums):
            sub = []
            for n in nums:
                if not sub or n > sub[-1]:
                    sub.append(n)
                else:
                    idx = bisect_left(sub, n)
                    sub[idx] = n
            return len(sub)

        max_seq = 0
        for i in range(len(nums)):
            left = [nums[j] for j in range(i) if nums[j] < nums[i]]
            right = [nums[j] for j in range(i + 1, len(nums)) if nums[j] < nums[i]]

            l = lis(left)
            r = lis(right[::-1])

            if l >= 1 and r >= 1:
                max_seq = max(l + 1 + r, max_seq)

        return len(nums) - max_seq
```
