---
date: 2024-05-07
difficulty: Easy
num: 3136
related_topics:
  - String
return: Done
---

# Problem: 3136. Valid Word

## Description
valid string of len > 3, only letters and digits, one vowel and consonant at least

## Approach / Thoughts
checks for each

## Solution
```python
class Solution:
    def isValid(self, word: str) -> bool:
        if len(word) < 3: return False

        for ch in word:
            if not ch.isalnum(): return False

        word = word.lower()
        vowels = {'a', 'e', 'i', 'o', 'u'}
        count_vowel = 0
        count_conson = 0

        for ch in word:
            if not ch.isdigit():
                index = ord(ch) - ord('a')

                if ch in vowels:
                    count_vowel += 1
                else:
                    count_conson += 1
        
        return count_vowel and count_conson
```
