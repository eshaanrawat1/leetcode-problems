---
date: 2024-01-31
difficulty: Medium
num: 134
related_topics:
  - Array
  - Greedy
return: Done
---

# Problem: 134. Gas Station

## Description
Find the index if possible from which you can make a clockwise rotation

## Approach / Thoughts
Find the difference array after checking sum condition and iterate through using a modified version of Kadane’s algorithm. We want to find first positive subarray instance

## Solution
```python
class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        if sum(gas) < sum(cost):
            return -1

        total, start = 0, 0
        for i in range(len(gas)):
            total += gas[i] - cost[i]
            if total < 0:
                total = 0
                start = i+1
        return start
```
