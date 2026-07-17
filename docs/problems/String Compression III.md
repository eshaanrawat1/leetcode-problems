---
date: 2024-05-27
difficulty: Medium
num: 3163
related_topics:
  - Array
  - String
return: Done
---

# Problem: 3163. String Compression Iii

## Description
compress string

## Approach / Thoughts
keep track of prev and dict for count of words

## Solution
```python
class Solution:
    def compressedString(self, word: str) -> str:
        i = 0
        comp = ""

        while i < len(word):
            count = 0

            j = i
            while j < len(word) and word[i] == word[j] and count < 9:
                j += 1
                count += 1
            comp += f'{count}{word[i]}'
            i = j
            count = 0
        return comp
```
