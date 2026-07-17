---
date: 2024-06-10
difficulty: Easy
num: 1122
related_topics:
  - Array
  - Counting Sort
  - Hash Table
  - Sorting
return: Done
---

# Problem: 1122. Relative Sort Array

## Description
sort relative

## Approach / Thoughts
two pass arrays

## Solution
```python
class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        cnt = Counter(arr1)
        is_present = set(arr2)

        res = []
        for n in arr2:
            tmp = [n] * cnt[n]
            res.extend(tmp)

        extra = []
        for n in arr1:
            if n not in is_present:
                extra.append(n)

        extra.sort()
        return res + extra
```
