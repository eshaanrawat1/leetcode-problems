---
date: 2025-03-16
difficulty: Easy
num: 3487
related_topics:
  - Array
  - Hash Table
return: Done
---

# Problem: 3487. Maximum Unique Subarray Sum After Deletion

## Description

## Approach / Thoughts
get rid of negatives

## Solution
```python
class Solution:
    def maxSum(self, nums: List[int]) -> int:
        cnt = Counter(nums)
        if all(k <= 0 for k in cnt):
            return max(k for k in cnt)
            
        return sum(k for k in cnt if k > 0)
```
