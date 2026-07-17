---
date: 2024-05-30
difficulty: Medium
num: 260
related_topics:
  - Array
  - Bit Manipulation
return: Review
---

# Problem: 260. Single Number Iii

## Description
find 2 numbers which appear once

## Approach / Thoughts
dict with counting value

## Solution
```python
class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:
        cnt = Counter(nums)
        return [k for k, v in cnt.items() if v == 1]
```
