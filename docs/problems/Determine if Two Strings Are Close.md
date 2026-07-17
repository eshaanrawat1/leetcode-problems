---
date: 2024-01-13
difficulty: Medium
num: 1657
related_topics:
  - Counting
  - Hash Table
  - Sorting
  - String
return: Done
---

# Problem: 1657. Determine If Two Strings Are Close

## Description
Determine if two strings are close - they are close if they you can use 2 operations any number of times in any order to make one string the other string

- Swap letters

- Make frequency of one letter, frequency of the other letter

## Approach / Thoughts
1. If words are not same length, impossible to be close return false

1. Add to frequency counter array

1. If they are anagrams, return true, operation 1 works

1. If one letter is not in the other, return false, no way for operation 2 to work

1. If frequencies of both number of letters are same, operation 2 wors

## Solution
```python
class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        if len(word1) != len(word2):
            return False 

        freq_one, freq_two = [0] * 26, [0] * 26
        for i in range(len(word1)):
            freq_one[ord(word1[i]) - ord('a')] += 1
            freq_two[ord(word2[i]) - ord('a')] += 1

        # operation 1 - is anagram
        if freq_one == freq_two:
            return True

        for i in range(26):
            if freq_one[i] == 0 and freq_two[i] > 0:
                return False
            if freq_two[i] == 0 and freq_one[i] > 0:
                return False

        # operation 2 - same frequence of values
        return Counter(freq_one) == Counter(freq_two)
```
