---
date: 2024-05-15
difficulty: Medium
num: 40
related_topics:
  - Array
  - Backtracking
return: Done
---

# Problem: 40. Combination Sum Ii

## Description
find all unique combinations

## Approach / Thoughts
sort list and keep track of skipping start points for duplicates

## Solution
```python
class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        candidates.sort()

        N = len(candidates)
        def backtrack(start, comb, cur_sum):
            if cur_sum == target:
                res.append(comb[:])
            if cur_sum > target:
                return 

            prev = -1
            for i in range(start, N):
                if candidates[i] == prev: continue
                comb.append(candidates[i])
                backtrack(i+1, comb, cur_sum + candidates[i])
                comb.pop()
                prev = candidates[i]
        backtrack(0, [], 0)
        return res
```
