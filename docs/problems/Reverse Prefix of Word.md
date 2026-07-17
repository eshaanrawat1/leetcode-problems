---
date: 2024-04-30
difficulty: Easy
num: 2000
related_topics:
  - String
  - Two-Pointer
return: Done
---

# Problem: 2000. Reverse Prefix Of Word

## Description
reverse from a certain prefix

## Approach / Thoughts
Reverse section use list slices

## Solution
```python
class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        if ch not in word:
            return word

        res = ""
        for i in range(len(word)):
            if word[i] == ch:
                temp = word[0:i+1]
                return temp[::-1] + word[i+1:]
```
