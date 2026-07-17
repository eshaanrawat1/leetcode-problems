---
date: 2024-08-26
difficulty: Hard
num: 32
related_topics:
  - Dynamic Programming
  - Stack
  - String
return: Done
---

# Problem: 32. Longest Valid Parentheses

## Description

## Approach / Thoughts
find extra open and close parens

find max distance in between x’s

## Solution
```python
class Solution:
    def longestValidParentheses(self, s: str) -> int:
        s = [ch for ch in s]

        extra_close = 0
        for i in range(len(s)):
            if s[i] == ')':
                extra_close += 1
            else:
                extra_close -= 1
            
            if extra_close > 0:
                s[i] = 'X'
                extra_close = 0

        extra_open = 0
        for i in range(len(s)-1,-1,-1):
            if s[i] == '(':
                extra_open += 1
            else:
                extra_open -= 1

            if extra_open > 0:
                s[i] = 'X'
                extra_open = 0

        if 'X' not in s:
            return len(s)

        prev_idx, max_dist = -1, 0
        for i in range(len(s)):
            if s[i] == 'X':
                max_dist = max(max_dist, i - prev_idx - 1)
                prev_idx = i

        max_dist = max(max_dist, len(s) - prev_idx - 1)
        return max_dist
```
