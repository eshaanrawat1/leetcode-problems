---
date: 2024-12-08
difficulty: Easy
num: 2341
related_topics:
  - Array
  - Counting
  - Hash Table
return: Done
---

# Problem: 2341. Maximum Number Of Pairs In Array

## Description
count pairs

## Approach / Thoughts
hash map and count div

## Solution
```python
class Solution:
    def numberOfPairs(self, nums: List[int]) -> List[int]:
        c = Counter(nums)

        pairs = leftover = 0
        for n, v in c.items():
            leftover += v % 2
            pairs += v // 2
        return [pairs, leftover]
```
