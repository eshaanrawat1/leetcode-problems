---
date: 2024-06-19
difficulty: Medium
num: 554
related_topics:
  - Array
  - Hash Table
return: Done
---

# Problem: 554. Brick Wall

## Description
find vertical line that crosses least bricks

## Approach / Thoughts
edges hashmap

## Solution
```python
class Solution:
    def leastBricks(self, wall: List[List[int]]) -> int:
        edges = defaultdict(int)

        for w in wall:
            count = 0
            for i in range(len(w)-1):
                count += w[i]
                edges[count] += 1    
        
        return len(wall) - max(edges.values()) if edges else len(wall)
```
