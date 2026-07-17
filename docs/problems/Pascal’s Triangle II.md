---
date: 2024-03-30
difficulty: Easy
num: 119
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 119. Pascal’S Triangle Ii

## Description
Same as problem

## Approach / Thoughts
Tabulation approach

## Solution
```python
class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        if rowIndex == 0: return [1]
        if rowIndex == 1: return [1,1]

        result = [1,1]

        for i in range(1, rowIndex):
            temp = []
            for j in range(1, len(result)):
                temp.append(result[j] + result[j-1])
            result = [1] + temp + [1]
        return result
```
