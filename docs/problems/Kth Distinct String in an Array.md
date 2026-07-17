---
date: 2024-08-04
difficulty: Easy
num: 2053
related_topics:
  - Array
  - Counting
  - Hash Table
  - String
return: Done
---

# Problem: 2053. Kth Distinct String In An Array

## Description

## Approach / Thoughts
find unique with counter, check kth

## Solution
```python
class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        cnt = Counter(arr)

        for s in arr:
            if cnt[s] == 1:
                k -= 1

                if k == 0:
                    return s
        return ""
```
