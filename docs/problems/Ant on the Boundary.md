---
date: 2024-02-05
difficulty: Easy
num: 3028
related_topics:
  - Array
return: Done
---

# Problem: 3028. Ant On The Boundary

## Description
Check how many times the ant returns to its initial position

## Approach / Thoughts
If total is ever 0, increment count, iterate through array.

## Solution
```python
class Solution:
    def returnToBoundaryCount(self, nums: List[int]) -> int:
        cnt = 0
        cur_sum = 0
        for n in nums:
            cur_sum += n
            if cur_sum == 0:
                cnt += 1
        return cnt
```
