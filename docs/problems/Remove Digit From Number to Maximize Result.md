---
date: 2024-08-16
difficulty: Easy
num: 2259
related_topics:
  - Enumeration
  - Greedy
  - String
return: Done
---

# Problem: 2259. Remove Digit From Number To Maximize Result

## Description

## Approach / Thoughts
only remove if num is less than right neighbor, else remove last

## Solution
```python
class Solution:
    def removeDigit(self, number: str, digit: str) -> str:
        for i in range(len(number)-1):
            if number[i] == digit:
                if number[i+1] > number[i]:
                    return number[:i] + number[i+1:]
        
        idx = number.rindex(digit)
        return number[:idx] + number[idx+1:]
```
