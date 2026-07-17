---
date: 2024-12-01
difficulty: Easy
num: 1455
related_topics:
  - String
  - String Matching
  - Two-Pointer
return: Done
---

# Problem: 1455. Check If A Word Occurs As A Prefix Of Any Word In A Sentence

## Description

## Approach / Thoughts
loop and check

## Solution
```python
class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:
        s = sentence.split()
        for i, n in enumerate(s):
            if n.startswith(searchWord):
                return i + 1
        return -1
```
