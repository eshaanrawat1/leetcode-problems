---
date: 2024-02-02
difficulty: Medium
num: 22
related_topics:
  - Backtracking
  - Dynamic Programming
  - String
return: Done
---

# Problem: 22. Generate Parentheses

## Description
Generate all combinations of valid parentheses where n is number of sets

## Approach / Thoughts
Check base case of if open = close = n, then we have all and can return and append

Check case while open is < n, then we can always add open

Check case if close < open, then we can add close, we cannot add if close > open because it would be invalid

## Solution
```python
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []
        def backtrack(o, c, s):
            if o == c == n:
                res.append(s)
                return 
            
            if o < n:
                backtrack(o+1, c, s + "(")
            if c < o: 
                backtrack(o, c+1, s + ")")

        backtrack(0, 0, "")
        return res
```
