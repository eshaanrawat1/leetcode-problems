---
date: 2026-01-20
difficulty: Medium
num: 3809
related_topics:
  - Math
  - Sorting
return: Done
---

# Problem: 3809. Best Reachable Tower

## Description

## Approach / Thoughts
sort valid options

## Solution
```python
class Solution:
    def bestTower(self, towers: List[List[int]], center: List[int], radius: int) -> List[int]:
        # 9:49 
        # overcomplicated lexicographic part 
        
        x2, y2 = center
        def manhattan_dist(x1, y1): 
            return abs(x2 - x1) + abs(y2 - y1)

        res = []
        for x, y, q in towers:
            d = manhattan_dist(x, y)
            if d <= radius:
                res.append((q, x, y))
        
        res.sort(key=lambda x: (-x[0], x[1], x[2]))
        return (res[0][1], res[0][2]) if res else [-1, -1]
            
```
