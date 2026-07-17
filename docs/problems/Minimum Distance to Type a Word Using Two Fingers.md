---
date: 2024-10-05
difficulty: Hard
num: 1320
related_topics:
  - Dynamic Programming
  - String
return: Done
---

# Problem: 1320. Minimum Distance To Type A Word Using Two Fingers

## Description

## Approach / Thoughts
3d dp, for each letter either choose finger one or finger two

## Solution
```python
class Solution:
    def minimumDistance(self, word: str) -> int:
        key_to_point = {}
        x = y = 0

        for c in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ':
            key_to_point[c] = (x, y)

            if x == 5:
                x = 0
                y += 1
            else:
                x += 1

        
        def euclid_dist(pA, pB):
            if not pA or not pB:
                return 0

            x1, y1 = key_to_point[pA]
            x2, y2 = key_to_point[pB]

            return abs(x1 - x2) + abs(y1 - y2)

        @cache
        def dfs(i, one, two):
            if i >= len(word):
                return 0

            d1 = euclid_dist(one, word[i])
            d2 = euclid_dist(two, word[i])

            op1 = d1 + dfs(i + 1, word[i], two)
            op2 = d2 + dfs(i + 1, one, word[i])

            return min(op1, op2)

        return dfs(0, None, None)
```
