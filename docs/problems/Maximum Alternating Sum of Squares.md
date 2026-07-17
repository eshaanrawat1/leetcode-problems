---
date: 2025-11-04
difficulty: Medium
num: 3727
related_topics:
  - Array
  - Greedy
  - Sorting
return: Done
---

# Problem: 3727. Maximum Alternating Sum Of Squares

## Description

## Approach / Thoughts
sort abs value pop from either sides

## Solution
```python
class Solution:
    def maxAlternatingSum(self, nums: List[int]) -> int:
        nums.sort(key = lambda x: abs(x))
        q = deque(nums)

        res = 0
        while q:
            res += pow(q.pop(), 2)
            if not q: break
            res -= pow(q.popleft(), 2)
        return res
```
