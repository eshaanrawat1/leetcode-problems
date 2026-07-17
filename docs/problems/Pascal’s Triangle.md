---
date: 2023-12-27
difficulty: Easy
num: 118
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 118. Pascal’S Triangle

## Description
Return all rows of Pascal’s Triangle

## Approach / Thoughts
Have some base cases of adding the 1st and 2nd rows of the triangle. Use another nested for loop to add all adjacent pairs to the next rows with 1 and 1 at the beginning and end.

## Solution
```javascript
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        res = []

        for i in range(numRows):
            if i == 0:
                res.append([1])
            elif i == 1:
                res.append([1,1])
            else:
                temp = [1]
                for j in range(1, i):
                    temp.append(res[-1][j] + res[-1][j - 1])
                temp.append(1)
                res.append(temp)
        return res
```
