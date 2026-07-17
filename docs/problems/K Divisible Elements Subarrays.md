---
date: 2024-08-16
difficulty: Medium
num: 2261
related_topics:
  - Array
  - Enumeration
  - Hash Function
  - Hash Table
  - Rolling Hash
  - Trie
return: Done
---

# Problem: 2261. K Divisible Elements Subarrays

## Description

## Approach / Thoughts
brute force all subarrays and check sets

## Solution
```python
class Solution:
    def countDistinct(self, nums: List[int], k: int, p: int) -> int:
        res = 0
        visit = set()
        
        for i in range(len(nums)):
            cnt = 0
            for j in range(i, len(nums)):
                if nums[j] % p == 0:
                    cnt += 1
                    
                if cnt > k:
                    break
                    
                visit.add(tuple(nums[i:j+1]))
        return len(visit)
```
