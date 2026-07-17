---
date: 2024-04-27
difficulty: Medium
num: 91
related_topics:
  - Dynamic Programming
  - String
return: Done
---

# Problem: 91. Decode Ways

## Description
Decode ways in one or two digits

## Approach / Thoughts
keep track of 1 or 2 digit ways based on 0 and 26 constraints

## Solution
```python
class Solution:
    def numDecodings(self, s: str) -> int:
        cache = {}
        def dfs(index):
            if index == len(s):
                return 1
            if s[index] == '0':
                return 0
            if index in cache:
                return cache[index]

            res = dfs(index+1)
            if 10 <= int(s[index:index+2]) <= 26:
                res += dfs(index+2)
                   
            cache[index] = res
            return res
        return dfs(0)
```
