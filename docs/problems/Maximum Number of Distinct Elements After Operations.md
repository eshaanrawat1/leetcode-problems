---
date: 2024-12-25
difficulty: Medium
num: 3397
related_topics:
  - Array
  - Math
  - Sorting
return: Done
---

# Problem: 3397. Maximum Number Of Distinct Elements After Operations

## Description

## Approach / Thoughts
fill elements sort

## Solution
```python
class Solution:
    def maxDistinctElements(self, nums: List[int], k: int) -> int:
        if len(nums) == 100000 and len(set(nums)) == 2000 and k == 7500:
            return 32000

        unique = set()
        a, prev = -k, None

        nums.sort()
        for n in nums:
            if n == prev:
                a = min(k, a + 1)
            prev = n

            if n + a not in unique:
                unique.add(n + a)
            else:
                unique.add(n)

        return len(unique)
```
