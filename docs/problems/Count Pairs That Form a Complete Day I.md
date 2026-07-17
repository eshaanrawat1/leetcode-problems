---
date: 2024-06-17
difficulty: Easy
num: 3184
related_topics:
  - Array
  - Hash Table
  - Math
return: Done
---

# Problem: 3184. Count Pairs That Form A Complete Day I

## Description
count pairs to form day

## Approach / Thoughts
brute force pairs

## Solution
```python
class Solution:
    def countCompleteDayPairs(self, hours: List[int]) -> int:
        pairs = 0
        for i in range(len(hours)):
            for j in range(i+1, len(hours)):
                if (hours[i] + hours[j]) % 24 == 0:
                    pairs += 1
        return pairs
```
