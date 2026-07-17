---
date: 2024-11-01
difficulty: Easy
num: 2490
related_topics:
  - String
return: Done
---

# Problem: 2490. Circular Sentence

## Description
same, word chain of last and first letter

## Approach / Thoughts
add 0 to the end and cycle

or modulo for cycle

## Solution
```python
class Solution:
    def isCircularSentence(self, sentence: str) -> bool:
        s = sentence.split(' ')
        L = len(s)

        for i in range(1, L+1):
            if s[i%L][0] != s[(i-1)%L][-1]:
                return False
        return True
```
