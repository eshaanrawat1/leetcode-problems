---
date: 2025-07-05
difficulty: Easy
num: 1394
related_topics:
  - Array
  - Counting
  - Hash Table
return: Done
---

# Problem: 1394. Find Lucky Integer In An Array

## Description

## Approach / Thoughts
frequency and check if empty

## Solution
```python
class Solution:
    def findLucky(self, arr: List[int]) -> int:
        cnt = Counter(arr)
        lucky = [x for x in cnt if x==cnt[x]]
        return max(lucky) if lucky else -1
```
