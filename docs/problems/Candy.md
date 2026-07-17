---
date: 2024-08-27
difficulty: Hard
num: 135
related_topics:
  - Array
  - Greedy
return: Done
---

# Problem: 135. Candy

## Description

## Approach / Thoughts
find peaks

check left and right to find max potential value, 1 increments

## Solution
```python
class Solution:
    def candy(self, ratings: List[int]) -> int:
        l_candies = [1] * len(ratings)
        r_candies = [1] * len(ratings)

        # check left 
        for i in range(1, len(ratings)):
            if ratings[i] > ratings[i-1]:
                l_candies[i] += l_candies[i-1]

        # check right
        for i in range(len(ratings)-2,-1,-1):
            if ratings[i] > ratings[i+1]:
                r_candies[i] += r_candies[i+1]

        total = 0
        for i in range(len(ratings)):
            total += max(l_candies[i], r_candies[i])
        return total
```
