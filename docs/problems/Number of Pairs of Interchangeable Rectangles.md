---
date: 2024-04-17
difficulty: Medium
num: 2001
related_topics:
  - Array
  - Counting
  - Hash Table
  - Math
  - Number Theory
return: Done
---

# Problem: 2001. Number Of Pairs Of Interchangeable Rectangles

## Description
Rectangles with same width-height ratios, find number of pairs

## Approach / Thoughts
Hash with ratio as key, increment number of rectangles and increase the count

## Solution
```python
class Solution:
    def interchangeableRectangles(self, rectangles: List[List[int]]) -> int:
        pairs = {}
        cnt = 0

        for rect in rectangles:
            width, height = rect[0], rect[1]
            ratio = width / height
            
            if (ratio) not in pairs:
                pairs[ratio] = 1
            else:
                cnt += pairs[ratio]
                pairs[ratio] += 1
        return cnt
```
