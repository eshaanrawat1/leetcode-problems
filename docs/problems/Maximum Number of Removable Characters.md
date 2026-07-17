---
date: 2024-07-19
difficulty: Medium
num: 1898
related_topics:
  - Array
  - Binary Search
  - String
  - Two-Pointer
return: Done
---

# Problem: 1898. Maximum Number Of Removable Characters

## Description

## Approach / Thoughts
binary search for possible number of removable characters

## Solution
```python
class Solution:
    def maximumRemovals(self, s: str, p: str, removable: List[int]) -> int:
        def remove(threshold):
            s_list = list(s)

            for i in range(threshold):
                s_list[removable[i]] = '*'

            top = bot = 0
            while top < len(s_list) and bot < len(p):
                if s_list[top] == p[bot]:
                    top += 1
                    bot += 1
                else:
                    top += 1
            return bot == len(p)

        l, r = 0, len(removable)
        cur_max = None

        while l <= r:
            m = (l + r) // 2
            if remove(m):
                l = m + 1
                cur_max = m
            else:
                r = m - 1
        return cur_max
```
