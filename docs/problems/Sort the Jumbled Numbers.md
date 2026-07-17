---
date: 2024-07-24
difficulty: Medium
num: 2191
related_topics:
  - Array
  - Sorting
return: Done
---

# Problem: 2191. Sort The Jumbled Numbers

## Description

## Approach / Thoughts
match index and relative sort lambda python

## Solution
```python
class Solution:
    def sortJumbled(self, mapping: List[int], nums: List[int]) -> List[int]:
        pairs = []
        for i, n in enumerate(nums):
            res = ""
            for ch in str(n):
                res += str(mapping[int(ch)])
            pairs.append([n, int(res), i])

        pairs.sort(key=lambda x: (x[1], x[-1]))
        return [i[0] for i in pairs]
```
