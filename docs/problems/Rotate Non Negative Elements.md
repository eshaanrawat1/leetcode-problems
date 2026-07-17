---
date: 2026-02-05
difficulty: Medium
num: 3819
related_topics:
  - Array
  - Senior
  - Simulation
return: Done
---

# Problem: 3819. Rotate Non Negative Elements

## Description

## Approach / Thoughts
simulate

## Solution
```python
class Solution:
    def rotateElements(self, nums: List[int], k: int) -> List[int]:
        # 5:24
        
        idx = deque()
        pos = deque()

        for i, n in enumerate(nums):
            if n >= 0:
                idx.append(i)
                pos.append(n)

        m = len(pos)
        if m == 0:
            return nums[:]

        k %= m
        for _ in range(k):
            pos.append(pos.popleft())

        res = []
        for i in range(len(nums)):
            if idx and i == idx[0]:
                res.append(pos.popleft())
                idx.popleft()
            else:
                res.append(nums[i])
        return res
```
