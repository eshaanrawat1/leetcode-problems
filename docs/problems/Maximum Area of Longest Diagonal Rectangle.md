---
date: 2025-08-25
difficulty: Easy
num: 3000
related_topics:
  - Array
return: Done
---

# Problem: 3000. Maximum Area Of Longest Diagonal Rectangle

## Description
same, max diagonal and area

## Approach / Thoughts
sort by hypotenuse length and area

## Solution
```python
class Solution:
    def areaOfMaxDiagonal(self, dimensions: List[List[int]]) -> int:
        def diag(a, b):
            return a*a + b*b

        def area(a, b):
            return a*b
            
        dimensions.sort(key=lambda x: (-diag(x[0], x[1]), -area(x[0], x[1])))
        return dimensions[0][0] * dimensions[0][1]
```
