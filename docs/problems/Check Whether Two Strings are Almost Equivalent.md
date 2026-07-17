---
date: 2023-12-29
difficulty: Easy
num: 2068
related_topics:
  - Counting
  - Hash Table
  - String
return: Done
---

# Problem: 2068. Check Whether Two Strings Are Almost Equivalent

## Description
Return true if the frequency of a letter in two words is more than 3.

## Approach / Thoughts
Count the frequency and store in a frequency array, use the two arrays and check the difference of each letter.

## Solution
```python
class Solution:
    def checkAlmostEquivalent(self, word1: str, word2: str) -> bool:
        one_freq, two_freq = [0] * 26, [0] * 26

        for ch in word1:
            one_freq[ord(ch) - ord('a')] += 1
        
        for ch in word2:
            two_freq[ord(ch) - ord('a')] += 1

        for i in range(len(one_freq)):
            if abs(one_freq[i] - two_freq[i]) > 3:
                return False
        return True
```
