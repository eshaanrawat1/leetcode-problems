---
date: 2024-01-19
difficulty: Medium
num: 12
related_topics:
  - Hash Table
  - Math
  - String
return: Done
---

# Problem: 12. Integer To Roman

## Description
Convert integer to roman numerals

## Approach / Thoughts
Use lots of test cases for each digits place. Then iterate through a list of each digit and add the correct value in romans.

## Solution
```python
class Solution:
    def intToRoman(self, num: int) -> str:
        thousands = {0: '', 1: 'M', 2: 'MM', 3: 'MMM'}
        hundreds = {0: '', 1: 'C', 2: 'CC', 3: 'CCC', 
                    4: 'CD', 5: 'D', 6: 'DC',
                    7: 'DCC', 8: 'DCCC', 9: 'CM'}
        tens = {0: '', 1: 'X', 2: 'XX', 3: 'XXX', 
                4: 'XL', 5: 'L', 6: 'LX',
                7: 'LXX', 8: 'LXXX', 9: 'XC'}
        ones = {0: '', 1: 'I', 2: 'II', 3: 'III', 
                4: 'IV', 5: 'V', 6: 'VI',
                7: 'VII', 8: 'VIII', 9: 'IX'}

        nums = list(str(num))
        while len(nums) < 4:
            nums.insert(0, 0)

        res = ""
        res += thousands[int(nums[0])]
        res += hundreds[int(nums[1])]
        res += tens[int(nums[2])]
        res += ones[int(nums[-1])]

        return res
```
