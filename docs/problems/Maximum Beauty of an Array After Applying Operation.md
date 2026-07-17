---
date: 2024-12-10
difficulty: Medium
num: 2779
related_topics:
  - Array
  - Binary Search
  - Sliding Window
  - Sorting
return: Done
---

# Problem: 2779. Maximum Beauty Of An Array After Applying Operation

## Description
max count of equal numbers after either + or - k

## Approach / Thoughts
prefix sum intervals

## Solution
```python
class Solution:
    def maximumBeauty(self, nums: List[int], k: int) -> int:
        ps = []
        for n in nums:
            ps.append((n-k, 1))
            ps.append((n+k+1, -1))

        ps.sort()

        res = cur = 0
        for n, c in ps:
            cur += c
            res = max(res, cur)
        return res
```
