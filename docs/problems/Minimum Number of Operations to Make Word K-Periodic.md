---
date: 2024-05-07
difficulty: Medium
num: 3137
related_topics:
  - Counting
  - Hash Table
  - String
return: Done
---

# Problem: 3137. Minimum Number Of Operations To Make Word K Periodic

## Description
num operations needed to get k length substrings

## Approach / Thoughts
get all k len substrings

find max prefix

find num changes

## Solution
```python
class Solution:
    def minimumOperationsToMakeKPeriodic(self, word: str, k: int) -> int:
        # partition word
        parts = []
        i = 0
        while i < len(word):
            parts.append(word[i:i+k])
            i += k
        
        # find max prefix
        cnt = Counter(parts)
        temp = temp_val = 0
        for k, v in cnt.items():
            if v > temp_val:
                temp = k
                temp_val = v
        
        # find number of changes needed
        return sum(cnt.values()) - temp_val
```
