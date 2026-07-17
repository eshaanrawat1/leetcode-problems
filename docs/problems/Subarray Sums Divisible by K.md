---
date: 2024-06-09
difficulty: Medium
num: 974
related_topics:
  - Array
  - Hash Table
  - Prefix Sum
return: Done
---

# Problem: 974. Subarray Sums Divisible By K

## Description

## Approach / Thoughts
prefix sum with mod

## Solution
```python
class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        count = defaultdict(int)
        count[0] = 1

        pre = res = 0
        for n in nums:
            pre = (pre + n) % k 
            res += count[pre]
            count[pre] += 1
        return res
```
