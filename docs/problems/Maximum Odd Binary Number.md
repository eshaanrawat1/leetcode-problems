---
date: 2024-03-01
difficulty: Easy
num: 2864
related_topics:
  - Greedy
  - Math
  - String
return: Done
---

# Problem: 2864. Maximum Odd Binary Number

## Description
Make max odd number from binary string

## Approach / Thoughts
Have all leading 1s, all zeros, last 1 (odd)

## Solution
```python
class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        cnt = Counter(s)

        zeros, ones = cnt["0"], cnt["1"]
        return (ones-1) * "1" + (zeros) * "0" + "1"
        
```
