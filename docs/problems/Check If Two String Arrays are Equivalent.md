---
date: 2023-12-24
difficulty: Easy
num: 1662
related_topics:
  - Array
  - String
return: Done
---

# Problem: 1662. Check If Two String Arrays Are Equivalent

## Description
Given two arrays of words or letters, return if the concatenated form of both arrays is equal.

## Approach / Thoughts
Concatenate both with loops and return if equal

## Solution
```javascript
class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        one, two = "", ""

        for letters in word1:
            one += letters
        
        for letters in word2:
            two += letters

        return(one == two)
```
