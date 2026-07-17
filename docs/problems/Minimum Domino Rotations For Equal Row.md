---
date: 2025-05-02
difficulty: Medium
num: 1007
related_topics:
  - Array
  - Greedy
return: Done
---

# Problem: 1007. Minimum Domino Rotations For Equal Row

## Description
same, make all in either top or bottom row equal

## Approach / Thoughts
either all top has to be same or all bottom

consider each possible face

## Solution
```python
class Solution:
    def minDominoRotations(self, tops: List[int], bottoms: List[int]) -> int:

        def flip(i):
            make_top = make_bot = 0
            for t, b in zip(tops, bottoms):
                if t != i and b != i:
                    return inf

                if t == i and b == i:
                    continue
                
                if t == i:
                    make_bot += 1
                if b == i:
                    make_top += 1

            return min(make_top, make_bot)

        ans = min(flip(i) for i in range(1, 7))  
        return ans if ans != inf else -1
```
