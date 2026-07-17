---
date: 2024-09-08
difficulty: Easy
num: 1893
related_topics:
  - Array
  - Hash Table
  - Prefix Sum
return: Done
---

# Problem: 1893. Check If All The Integers In A Range Are Covered

## Description

## Approach / Thoughts
prefix sum line sweep

## Solution
```python
class Solution:
    def isCovered(self, ranges: List[List[int]], left: int, right: int) -> bool:
        covered = [0] * 52

        for start, end in ranges:
            covered[start] += 1
            covered[end + 1] -= 1

        for i in range(1, len(covered)):
            covered[i] += covered[i - 1]

        for i in range(left, right + 1):
            if covered[i] == 0:
                return False
        return True
```
