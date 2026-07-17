---
date: 2024-04-22
difficulty: Medium
num: 560
related_topics:
  - Array
  - Hash Table
  - Prefix Sum
return: Review
---

# Problem: 560. Subarray Sum Equals K

## Description
Same as problem

## Approach / Thoughts
Hashtables with subarray sum prefix also include 0

## Solution
```python
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        prefix = defaultdict(int)
        prefix[0] = 1

        pre = res = 0
        for n in nums:
            pre += n
            res += prefix[pre-k]
            prefix[pre] += 1

        return res
```
