---
date: 2024-02-25
difficulty: Easy
num: 3046
related_topics:
  - Array
  - Hash Table
return: Done
---

# Problem: 3046. Split The Array

## Description
Return true if it is possible to split the array in two parts such that each part has distinct elements

## Approach / Thoughts
Check if frequency of each element is not more than 2

## Solution
```python
class Solution:
    def isPossibleToSplit(self, nums: List[int]) -> bool:
        cnt = Counter(nums)
        
        for v in cnt.values():
            if v > 2:
                return False
        return True
```
