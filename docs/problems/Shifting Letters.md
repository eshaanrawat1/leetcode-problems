---
date: 2024-06-13
difficulty: Medium
num: 848
related_topics:
  - Array
  - Prefix Sum
  - String
return: Done
---

# Problem: 848. Shifting Letters

## Description
shift all letters by amount

## Approach / Thoughts
prefix sum and mod for letter shifts

## Solution
```python
class Solution:
    def shiftingLetters(self, s: str, shifts: List[int]) -> str:
        for i in range(len(shifts)-2,-1,-1):
            shifts[i] += shifts[i+1]

        letters = list(s)
        for i in range(len(letters)):
            shift_amt = shifts[i]
            letter_amt = ord(letters[i]) - ord('a')
            letters[i] = chr(((letter_amt + shift_amt) % 26) + ord('a'))

        return ''.join(letters)
```
