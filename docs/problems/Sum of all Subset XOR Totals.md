---
date: 2024-05-19
difficulty: Medium
num: 1863
related_topics:
  - Array
  - Backtracking
  - Bit Manipulation
  - Combinatorics
  - Enumeration
  - Math
return: Done
---

# Problem: 1863. Sum Of All Subset Xor Totals

## Description

## Approach / Thoughts
get every subset with backtracking and sum xor

## Solution
```python
class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        N = len(nums)
        self.total = 0

        def dfs(i, sub):
            if i == N and sub:
                cur_sum = sub[0]
                for i in range(1, len(sub)):
                    cur_sum ^= sub[i]

                self.total += cur_sum
                return
            if i == N:
                return
            
            sub.append(nums[i])
            dfs(i + 1, sub)

            sub.pop()
            dfs(i + 1, sub)
        dfs(0, [])
        return self.total
```
