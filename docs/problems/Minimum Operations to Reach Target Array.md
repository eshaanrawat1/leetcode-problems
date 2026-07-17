---
date: 2026-01-20
difficulty: Medium
num: 3810
related_topics:
  - Array
return: Done
---

# Problem: 3810. Minimum Operations To Reach Target Array

## Description
same, clean all segments with same value

## Approach / Thoughts
count unique segments that need to be changed

## Solution
```python
class Solution:
    def minOperations(self, nums: List[int], target: List[int]) -> int:
        # 2:32 
        # found the trick?
        # bizzarely easy after reducing to number of streaks
        # you can automatically convert to target, no complex operations
        
        cnt = set()
        for x, y in zip(nums, target):
            if x != y:
                cnt.add(x)
        return len(cnt)
```
