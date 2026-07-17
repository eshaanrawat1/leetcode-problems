---
date: 2025-03-16
difficulty: Easy
num: 2206
related_topics:
  - Array
  - Bit Manipulation
  - Counting
  - Hash Table
return: Done
---

# Problem: 2206. Divide Array Into Equal Pairs

## Description

## Approach / Thoughts
even freq of each number

## Solution
```python
class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        cnt = Counter(nums)
        return all(cnt[k] % 2 == 0 for k in cnt)
```
