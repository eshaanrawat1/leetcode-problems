---
date: 2024-09-08
difficulty: Medium
num: 1943
related_topics:
  - Array
  - Hash Table
  - Prefix Sum
  - Sorting
return: Done
---

# Problem: 1943. Describe The Painting

## Description
same, but different sums

## Approach / Thoughts
line sweep, account for sum changes with normal dict storage

sum changes even out to 0 at interval ends

account for prefix add ons

## Solution
```python
class Solution:
    def splitPainting(self, segments: List[List[int]]) -> List[List[int]]:
        ps = defaultdict(int)
        for start, end, color in segments:
            ps[start] += color
            ps[end] -= color

        prev, res = 0, []
        for index in sorted(ps):
            if prev in ps and ps[prev]:
                res.append([prev, index, ps[prev]])
            ps[index] += ps[prev]
            prev = index
        return res
```
