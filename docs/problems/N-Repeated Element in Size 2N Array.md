---
date: 2026-01-01
difficulty: Easy
num: 961
related_topics:
  - Array
  - Hash Table
return: Done
---

# Problem: 961. N Repeated Element In Size 2N Array

## Description

## Approach / Thoughts
counter

## Solution
```python
class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        cnt = Counter(nums)
        for k, v in cnt.items():
            if v == len(nums) // 2:
                return k
                
```
