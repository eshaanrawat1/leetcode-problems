---
date: 2024-08-17
difficulty: Medium
num: 1937
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 1937. Maximum Number Of Points With Cost

## Description

## Approach / Thoughts
similar to min falling path sum

use prefix left and right to find the max possible score we can get from each point

stateless, so update the rows as we go

## Solution
```python
class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        ROWS, COLS = len(points), len(points[0])
        row = points[0]

        for r in range(1, ROWS):
            tmp_row = points[r][:]

            left = [0] * COLS
            right = [0] * COLS

            left[0] = row[0]
            right[-1] = row[-1]

            for i in range(1, COLS):
                left[i] = max(left[i-1]-1, row[i])

            for j in range(COLS-2,-1,-1):
                right[j] = max(right[j+1]-1, row[j])

            for i in range(COLS):
                tmp_row[i] += max(left[i], right[i])
            
            row = tmp_row
        return max(row)
```
