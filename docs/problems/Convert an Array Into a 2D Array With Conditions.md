---
date: 2025-10-19
difficulty: Medium
num: 2610
related_topics:
  - Array
  - Hash Table
return: Done
---

# Problem: 2610. Convert An Array Into A 2D Array With Conditions

## Description
same, unique elements in each row, min number of rows

## Approach / Thoughts
total rows = max frequency of any element

assign each element to its freq - 1 index, decrease freq to account for changes in assigned

## Solution
```python
class Solution:
    def findMatrix(self, nums: List[int]) -> List[List[int]]:
        cnt = Counter(nums)
        max_freq = max(cnt.values())

        res = [[] for _ in range(max_freq)]
        
        for n in nums:
            idx = cnt[n] - 1
            res[idx].append(n)
            cnt[n] -= 1
        return res
```
