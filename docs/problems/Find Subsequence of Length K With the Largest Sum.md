---
date: 2025-06-27
difficulty: Easy
num: 2099
related_topics:
  - Array
  - Hash Table
  - Heap (Priority Queue)
  - Sorting
return: Done
---

# Problem: 2099. Find Subsequence Of Length K With The Largest Sum

## Description

## Approach / Thoughts
take k biggest, find in order

## Solution
```python
class Solution:
    def maxSubsequence(self, nums: List[int], k: int) -> List[int]:
        og = nums[:]
        nums.sort(reverse=True)
        cnt = Counter(nums[:k])
        
        res = []
        for n in og:
            if cnt[n]:
                res.append(n)
                cnt[n] -= 1
        return res
```
