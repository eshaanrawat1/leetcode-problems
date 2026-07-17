---
date: 2024-09-08
difficulty: Easy
num: 3274
related_topics:
  - Math
  - String
return: Done
---

# Problem: 3274. Check If Two Chessboard Squares Have The Same Color

## Description

## Approach / Thoughts
even odd sum

## Solution
```python
class Solution:
    def checkTwoChessboards(self, c1: str, c2: str) -> bool:
        x1, y1 = c1[0], c1[1]
        x2, y2 = c2[0], c2[1]

        ans1 = ord(x1) - ord('a') + 1 + int(y1)
        ans2 = ord(x2) - ord('a') + 1 + int(y2)

        return ans1 % 2 == ans2 % 2
```
