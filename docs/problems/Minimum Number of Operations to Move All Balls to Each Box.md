---
date: 2025-01-05
difficulty: Medium
num: 1769
related_topics:
  - Array
  - Prefix Sum
  - String
return: Review
---

# Problem: 1769. Minimum Number Of Operations To Move All Balls To Each Box

## Description

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def minOperations(self, boxes: str) -> List[int]:
        n = len(boxes)
        res = []

        for i in range(n):
            cnt = 0
            for j in range(n):
                cnt += abs(j - i) * int(boxes[j])
            res.append(cnt)
        return res
```
