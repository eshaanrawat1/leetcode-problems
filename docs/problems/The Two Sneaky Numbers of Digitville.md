---
date: 2024-09-18
difficulty: Easy
num: 3289
related_topics:
  - Array
  - Hash Table
  - Math
return: Done
---

# Problem: 3289. The Two Sneaky Numbers Of Digitville

## Description
find nums which appear twice

## Approach / Thoughts
counter

## Solution
```python
class Solution:
    def getSneakyNumbers(self, nums: List[int]) -> List[int]:
        cnt = Counter(nums)
        return [k for k,v in cnt.items() if v == 2]
```
