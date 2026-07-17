---
date: 2024-01-19
difficulty: Easy
num: 13
related_topics:
  - Hash Table
  - Math
  - String
return: Done
---

# Problem: 13. Roman To Integer

## Description
Convert roman numeral to integer.

## Approach / Thoughts
Store conversions in a dict. Convert any unique values like 9, 90, etc. to original values such as IX → VIIII and then iterate through and add all values to a dict.

## Solution
```python
class Solution:
    def romanToInt(self, s: str) -> int:
        translations = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        s = s.replace('IV', 'IIII').replace('IX', 'VIIII')
        s = s.replace('XL', 'XXXX').replace('XC', 'LXXXX')
        s = s.replace('CD', 'CCCC').replace('CM', 'DCCCC')

        total = 0
        for ch in s:
            total += translations[ch]

        return total
```
