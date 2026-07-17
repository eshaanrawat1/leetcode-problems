---
date: 2024-12-26
difficulty: Medium
num: 1014
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 1014. Best Sightseeing Pair

## Description

## Approach / Thoughts
formula dp for best left and right

## Solution
```python
class Solution:
    def maxScoreSightseeingPair(self, values: List[int]) -> int:
        n=len(values)
        dp, score=0, 0
        for i, x in enumerate(values):
            score=max(score, dp+x-i)
            dp=max(dp, x+i)
        return score
```
