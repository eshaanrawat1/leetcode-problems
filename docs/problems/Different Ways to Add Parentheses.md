---
date: 2024-09-18
difficulty: Medium
num: 241
related_topics:
  - Dynamic Programming
  - Math
  - Memoization
  - Recursion
  - String
return: Done
---

# Problem: 241. Different Ways To Add Parentheses

## Description

## Approach / Thoughts
at each sign split into left and right and check all options

## Solution
```python
class Solution:
    def diffWaysToCompute(self, expression: str) -> List[int]:
        ops = '+-*'

        @cache
        def dfs(s):
            if '+' not in s and '-' not in s and '*' not in s:
                return [int(s)]

            res = []
            for i, c in enumerate(s):
                if c in ops:
                    left = dfs(s[:i])
                    right = dfs(s[i+1:])

                    for n1 in left:
                        for n2 in right:
                            if c == '+': res.append(n1 + n2)
                            if c == '-': res.append(n1 - n2)
                            if c == '*': res.append(n1 * n2)

            return res

        return dfs(expression)
```
