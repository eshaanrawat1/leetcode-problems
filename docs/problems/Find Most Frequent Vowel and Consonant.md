---
date: 2025-09-13
difficulty: Easy
num: 3541
related_topics:
  - Counting
  - Hash Table
  - String
return: Done
---

# Problem: 3541. Find Most Frequent Vowel And Consonant

## Description

## Approach / Thoughts
count

## Solution
```python
class Solution:
    def maxFreqSum(self, s: str) -> int:
        cnt = Counter(s)
        c_max = v_max = 0

        for k, v in cnt.items():
            if k in 'aeiou':
                v_max = max(v_max, v)
            else:
                c_max = max(c_max, v)
        return c_max + v_max
```
