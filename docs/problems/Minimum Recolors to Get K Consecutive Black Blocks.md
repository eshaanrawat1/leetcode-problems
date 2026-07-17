---
date: 2025-03-07
difficulty: Easy
num: 2379
related_topics:
  - Sliding Window
  - String
return: Done
---

# Problem: 2379. Minimum Recolors To Get K Consecutive Black Blocks

## Description

## Approach / Thoughts
fill gaps

## Solution
```python
class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        b = w = 0
        for i in range(k):
            if blocks[i] == 'W': 
                w += 1
            else: 
                b += 1

        if b == k:
            return 0

        recolors = w
        l = 0
        for i in range(k, len(blocks)):
            if blocks[i] == 'W':
                w += 1
            else:
                b += 1

            if blocks[l] == 'W':
                w -= 1
            else:
                b -= 1
            l += 1
            
            recolors = min(recolors, w)
        return recolors
```
