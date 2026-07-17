---
date: 2024-09-08
difficulty: Easy
num: 1854
related_topics:
  - Array
  - Counting
  - Prefix Sum
return: Done
---

# Problem: 1854. Maximum Population Year

## Description

## Approach / Thoughts
line sweep

## Solution
```python
class Solution:
    def maximumPopulation(self, logs: List[List[int]]) -> int:
        years = [0] * 102
        for born, die in logs:
            years[born - 1950] += 1
            years[die - 1950] -= 1

        cur_pop = max_pop = max_year = 0
        for i in range(len(years)): 
            cur_pop += years[i]
            if cur_pop > max_pop:
                max_pop = cur_pop
                max_year = i + 1950
        return max_year
```
