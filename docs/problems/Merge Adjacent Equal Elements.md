---
date: 2026-02-16
difficulty: Medium
num: 3834
related_topics:
  - Senior
  - Stack
return: Done
---

# Problem: 3834. Merge Adjacent Equal Elements

## Description
same, replace same elements with sum

## Approach / Thoughts
stack

## Solution
```python
class Solution:
    def mergeAdjacent(self, nums: List[int]) -> List[int]:
        stack = []
        for n in nums:
            while stack and stack[-1] == n:
                n += stack.pop() 
            stack.append(n)
        return stack
```
