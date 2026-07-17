---
date: 2024-01-31
difficulty: Medium
num: 39
related_topics:
  - Array
  - Backtracking
return: Done
---

# Problem: 39. Combination Sum

## Description
Find all possible unique combinations that add to a target

## Approach / Thoughts
Backtrack and choose all paths where we isolate elements kind of

## Solution
```python
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        total = 0

        def backtrack(i, comb, total):
            if i >= len(candidates) or total > target:
                return
            if total == target:
                res.append(comb[:])
                return
            
            comb.append(candidates[i])
            backtrack(i, comb, total+candidates[i])

            comb.pop()
            backtrack(i+1, comb, total)
        backtrack(0, [], total)
        return res
```
