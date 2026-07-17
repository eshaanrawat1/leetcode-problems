---
date: 2024-04-22
difficulty: Medium
num: 523
related_topics:
  - Array
  - Hash Table
  - Math
  - Prefix Sum
return: Review
---

# Problem: 523. Continuous Subarray Sum

## Description
Find if there was a subarray sum that was length 2 and multiple of k

## Approach / Thoughts
Store each prefix running sum mod in a dict, if we have seen it before and the difference in indexes is greater than 2, return true.

## Solution
```python
class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        prefix_div = {0: -1}

        res = 0
        for idx, n in enumerate(nums):
            res += n

            if res % k in prefix_div:
                if idx - prefix_div[res % k] >= 2:
                    return True
            else:
                prefix_div[res % k] = idx
        return False
```
