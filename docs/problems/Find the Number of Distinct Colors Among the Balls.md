---
date: 2025-02-06
difficulty: Medium
num: 3160
related_topics:
  - Array
  - Hash Table
  - Simulation
return: Done
---

# Problem: 3160. Find The Number Of Distinct Colors Among The Balls

## Description
same, for each query

## Approach / Thoughts
keep track of colors added and removed with map

## Solution
```python
class Solution:
    def queryResults(self, limit: int, queries: List[List[int]]) -> List[int]:
        balls = Counter()
        colors = Counter()
        total = 0
        res = []

        for b, c in queries:
            old_color = balls[b]

            if colors[c] == 0:
                total += 1
            colors[c] += 1
            balls[b] = c   

            colors[old_color] -= 1
            if old_color != 0 and colors[old_color] == 0:
                total -= 1

            res.append(total)
            
        return res
```
