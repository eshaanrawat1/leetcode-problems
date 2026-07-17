---
date: 2025-11-17
difficulty: Easy
num: 1437
related_topics:
  - Array
return: Done
---

# Problem: 1437. Check If All 1'S Are At Least Length K Places Away

## Description

## Approach / Thoughts
check prev 1

## Solution
```python
class Solution:
    def kLengthApart(self, nums: List[int], k: int) -> bool:
        prev = -inf
        for i, n in enumerate(nums):
            if n == 1:
                if i - prev - 1 < k:
                    return False
                prev = i
        return True
```
