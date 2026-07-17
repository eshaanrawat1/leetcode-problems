---
date: 2025-08-23
difficulty: Medium
num: 991
related_topics:
  - Greedy
  - Math
return: Done
---

# Problem: 991. Broken Calculator

## Description
same, convert from X → Y

## Approach / Thoughts
revert from Y → X since if Y is even, we have to / 2 else + 1

## Solution
```python
class Solution:
    def brokenCalc(self, startValue: int, target: int) -> int:
        
        @cache
        def dfs(y):
            if y <= startValue:
                return startValue - y

            if y % 2 == 0:
                return 1 + dfs(y // 2)
            return 1 + dfs(y + 1)
        
        return dfs(target)
```
