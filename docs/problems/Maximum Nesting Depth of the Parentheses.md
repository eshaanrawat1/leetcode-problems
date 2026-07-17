---
date: 2024-04-03
difficulty: Easy
num: 1614
related_topics:
  - Stack
  - String
return: Done
---

# Problem: 1614. Maximum Nesting Depth Of The Parentheses

## Description
Max depth

## Approach / Thoughts
Count parenthesis, keep track of max depth

## Solution
```python
class Solution:
    def maxDepth(self, s: str) -> int:
        max_depth, cur_depth = -1, 0
        for i in range(len(s)):
            if s[i] == '(': 
                cur_depth += 1
            elif s[i] == ')': 
                cur_depth -= 1
            max_depth = max(max_depth, cur_depth)
        return max_depth
```
