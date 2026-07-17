---
date: 2023-12-21
difficulty: Medium
num: 1637
related_topics:
  - Array
  - Sorting
return: Done
---

# Problem: 1637. Widest Vertical Area Between Two Points Containing No Points

## Description
Multiple points are on a plane, basically find the widest x distance between points such that there is no point in between them

## Approach / Thoughts
We are not calculating the whole area so that does not matter, we only need x coordinates.

- 1 pass to iterate through the array only grabbing column 0 elements of every row

- Sort the new array in non-decreasing order

- Iterate through the array starting at 1, calculate difference between pairs of adjacent points

- Store max difference in a temp variable

## Solution
```python
class Solution:
    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:
        res = []
        for i in range(len(points)):
            res.append(points[i][0])
        
        res.sort()
        curr_max = float("-inf")
        
        for i in range(1, len(res)):
            if res[i] - res[i-1] > curr_max:
                curr_max = res[i] - res[i-1]
        
        return curr_max
```
