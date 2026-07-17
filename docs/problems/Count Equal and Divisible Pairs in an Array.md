---
date: 2025-04-16
difficulty: Easy
num: 2176
related_topics:
  - Array
return: Done
---

# Problem: 2176. Count Equal And Divisible Pairs In An Array

## Description
same, where nums[i] == nums[j] and i * j % k == 0

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def countPairs(self, nums: List[int], k: int) -> int:
        n, res = len(nums), 0

        for i in range(n):
            for j in range(i+1, n):
                if nums[i] == nums[j] and (i * j) % k == 0:
                    res += 1
        return res
```
