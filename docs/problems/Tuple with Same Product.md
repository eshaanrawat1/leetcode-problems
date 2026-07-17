---
date: 2025-02-05
difficulty: Medium
num: 1726
related_topics:
  - Array
  - Counting
  - Hash Table
return: Done
---

# Problem: 1726. Tuple With Same Product

## Description

## Approach / Thoughts
find formula, multiple of 8

## Solution
```python
class Solution:
    def tupleSameProduct(self, nums: List[int]) -> int:
        n = len(nums)
        cnt = Counter()

        for i in range(n):
            for j in range(i+1, n):
                cnt[nums[i] * nums[j]] += 1
                
        return sum(x*(4*(x-1)) for x in cnt.values() if x >= 2)
```
