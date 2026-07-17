---
date: 2023-12-31
difficulty: Easy
num: 455
related_topics:
  - Array
  - Greedy
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 455. Assign Cookies

## Description
Assign cookies with size to kids with greed score. Cookies need to have size greater or equal to greed score.

## Approach / Thoughts
Sort both arrays in reverse order. Then use two pointers, if we assign cookie then move both top and bottom pointer otherwise only move the top.

## Solution
```python
class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()

        g, s = g[::-1], s[::-1]
        top, bot = 0, 0

        while bot < len(s) and top < len(g):
            if s[bot] >= g[top]:
                bot += 1
            top += 1

        return bot
```
