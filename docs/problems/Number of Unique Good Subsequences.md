---
date: 2024-09-06
difficulty: Hard
num: 1987
related_topics:
  - Dynamic Programming
  - String
return: Done
---

# Problem: 1987. Number Of Unique Good Subsequences

## Description

## Approach / Thoughts
similar to distinct subsequence 2

adjust count for 0 since we can’t have 00

if 1, its sum(ends) + 1

else its just sum(ends)

account for edge case that we need to have 1 zero (ends does not)

## Solution
```python
class Solution:
    def numberOfUniqueGoodSubsequences(self, binary: str) -> int:
        i = 0
        while i < len(binary) and binary[i] != '1':
            i +=1
        res = 1 if (i > 0 or binary.count('0')) else 0
        
        ends = [0, 0]
        for j in range(i, len(binary)):
            index = int(binary[j])
            ends[index] = sum(ends) + index
        return (sum(ends) + res) % (10 ** 9 + 7)
```
