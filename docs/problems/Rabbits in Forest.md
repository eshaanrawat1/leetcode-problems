---
date: 2024-08-01
difficulty: Medium
num: 781
related_topics:
  - Array
  - Greedy
  - Hash Table
  - Math
return: Done
---

# Problem: 781. Rabbits In Forest

## Description
how many other rabbits with color

## Approach / Thoughts
bucket sort, each rabbit has i+1 rabbits of that color max

if bucket overflows, create new bucket

sum up remaining buckets

## Solution
```python
class Solution:
    def numRabbits(self, answers: List[int]) -> int:
        res = 0
        color = [0] * 1001

        for i in range(len(answers)):
            val = answers[i]

            if color[val + 1] == val + 1:
                res += val + 1
                color[val + 1] = 1
            else:
                color[val + 1] += 1

        return res + sum(i for i,n in enumerate(color) if n)
```
