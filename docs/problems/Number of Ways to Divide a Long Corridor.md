---
date: 2024-11-04
difficulty: Hard
num: 2147
related_topics:
  - Dynamic Programming
  - Math
  - String
return: Done
---

# Problem: 2147. Number Of Ways To Divide A Long Corridor

## Description
same, 2 seats in each section

## Approach / Thoughts
for each split of 2, multiply across

## Solution
```python
class Solution:
    def numberOfWays(self, corridor: str) -> int:
        total_seats = corridor.count('S')
        if total_seats % 2 == 1 or not total_seats:
            return 0

        places = [i for i, s in enumerate(corridor) if s == 'S']

        res = 1
        for i in range(len(places)):
            if i % 2 == 1:
                if i != len(places) - 1:
                    res = (res * (places[i+1] - places[i])) % (10 ** 9 + 7)
        return res
```
