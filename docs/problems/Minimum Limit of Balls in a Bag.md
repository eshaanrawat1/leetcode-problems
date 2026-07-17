---
date: 2024-12-06
difficulty: Medium
num: 1760
related_topics:
  - Array
  - Binary Search
return: Review
---

# Problem: 1760. Minimum Limit Of Balls In A Bag

## Description

## Approach / Thoughts
binary search on each mid, for each num find operations needed to reduce min to that number

## Solution
```python
class Solution:
    def minimumSize(self, nums: List[int], maxOperations: int) -> int:
        l, r = 1, max(nums)
        res = None

        while l <= r:
            mid = (l + r) // 2

            cnt = 0
            for n in nums:
                cnt += (n - 1) // mid
            
            if cnt > maxOperations:
                l = mid + 1
            else:
                res = mid
                r = mid - 1

        return res    
```
