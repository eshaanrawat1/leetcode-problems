---
date: 2024-01-29
difficulty: Medium
num: 17
related_topics:
  - Backtracking
  - Hash Table
  - String
return: Done
---

# Problem: 17. Letter Combinations Of A Phone Number

## Description
Find all possible letter combinations of phone digits

## Approach / Thoughts
Create dict to map numbers to letters

Base case if the string is as long as number of letters

Check each possibility

## Solution
```python
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        res = []
        digit_to_letter = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }

        def backtrack(i, cur):
            if len(cur) == len(digits):
                res.append(cur)
                return
            
            for c in digit_to_letter[digits[i]]:
                backtrack(i+1, cur+c)
        if digits:
            backtrack(0, "")
        return res
```
