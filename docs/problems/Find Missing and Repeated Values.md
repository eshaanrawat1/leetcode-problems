---
date: 2025-03-05
difficulty: Easy
num: 2965
related_topics:
  - Array
  - Hash Table
  - Math
  - Matrix
return: Done
---

# Problem: 2965. Find Missing And Repeated Values

## Description
find missing, repeat

## Approach / Thoughts
map for repeat, keep track of arithmetic sum

## Solution
```python
class Solution:
    def findMissingAndRepeatedValues(self, grid: List[List[int]]) -> List[int]:
        cnt = Counter()
        nsq = len(grid) ** 2
        total = nsq * (nsq + 1) // 2
        res = -1

        for x in grid:
            for y in x:
                cnt[y] += 1
                if cnt[y] == 2:
                    res = y
                else:
                    total -= y
        return [res, total]
```
