---
date: 2024-10-17
difficulty: Medium
num: 2044
related_topics:
  - Array
  - Backtracking
  - Bit Manipulation
  - Enumeration
return: Done
---

# Problem: 2044. Count Number Of Maximum Bitwise Or Subsets

## Description

## Approach / Thoughts
bitwise or all elements to find max

dfs subsets

## Solution
```python
class Solution:
    def countMaxOrSubsets(self, nums: List[int]) -> int:
        score = 0
        for n in nums:
            score |= n

        self.count = 0

        def dfs(i, cur_score):
            if i >= len(nums):
                if cur_score == score:
                    self.count += 1
                return

            dfs(i + 1, cur_score | nums[i])
            dfs(i + 1, cur_score)

        dfs(0, 0)    
        return self.count
```
