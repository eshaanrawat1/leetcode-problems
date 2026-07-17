---
date: 2024-02-29
difficulty: Easy
num: 3038
related_topics:
  - Array
  - Simulation
return: Done
---

# Problem: 3038. Maximum Number Of Operations With The Same Score I

## Description
Delete first two elements from array until sum of two doesn’t match

## Approach / Thoughts
Store ops in stack, length is count

## Solution
```python
class Solution:
    def maxOperations(self, nums: List[int]) -> int:
        ops = []
        for i in range(1, len(nums), 2):
            if ops and nums[i]+nums[i-1] != ops[-1]:
                return len(ops)
            ops.append(nums[i]+nums[i-1])
        return len(ops)
```
