---
date: 2024-08-20
difficulty: Hard
num: 664
related_topics:
  - Dynamic Programming
  - String
return: Done
---

# Problem: 664. Strange Printer

## Description
min turns to print s

## Approach / Thoughts
break into substrings, only time we want to break is if we find x … x pattern

because then it is equivalent to i+1 j-1 printing

we can simulate that by cutting off the end letter a bcd a → a bcd

it is the same cost as cutting off the first letter

## Solution
```python
class Solution:
    def strangePrinter(self, s: str) -> int:
        dp = {}
        def dfs(start, end):
            if start > end:
                return 0
            if (start, end) in dp:
                return dp[(start, end)]

            min_cost = 1 + dfs(start + 1, end)
            for mid in range(start + 1, end + 1):
                if s[start] == s[mid]:
                    
                    match = dfs(start + 1, mid) + dfs(mid + 1, end)
                    min_cost = min(min_cost, match)
            
            dp[(start, end)] = min_cost
            return min_cost
        return dfs(0, len(s)-1)
```
