---
date: 2025-06-14
difficulty: Easy
num: 2566
related_topics:
  - Greedy
  - Math
return: Done
---

# Problem: 2566. Maximum Difference By Remapping A Digit

## Description

## Approach / Thoughts
brute force remap every digit

## Solution
```python
class Solution:
    def minMaxDifference(self, num: int) -> int:
        
        max_num = -inf
        min_num = inf

        for i in range(10):
            for j in range(10):

                ls = [c for c in str(num)]

                for k, c in enumerate(ls):
                    if int(c) == i:
                        ls[k] = str(j)

                max_num = max(max_num, int(''.join(ls)))
                min_num = min(min_num, int(''.join(ls)))

        return max_num - min_num
```
