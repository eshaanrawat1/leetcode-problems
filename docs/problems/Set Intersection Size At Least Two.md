---
date: 2025-11-25
difficulty: Hard
num: 757
related_topics:
  - Array
  - Greedy
  - Sorting
return: Done
---

# Problem: 757. Set Intersection Size At Least Two

## Description

## Approach / Thoughts
greedy cover intervals, sort by end asc and start desc for most restrictive

always pick last two closest to edge

## Solution
```python
class Solution:
    def intersectionSizeTwo(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: (x[1], -x[0]))

        cover = [-inf, -inf]
        for s, e in intervals:
            v1 = cover[-2]
            v2 = cover[-1]

            if s <= v1 <= e and s <= v2 <= e:
                continue 

            elif s <= v2 <= e:
                cover.append(e)

            else:
                cover.append(e-1)
                cover.append(e)
                
        return len(cover) - 2
```
