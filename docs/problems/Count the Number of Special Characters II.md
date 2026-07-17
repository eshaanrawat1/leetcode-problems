---
date: 2024-04-25
difficulty: Medium
num: 3121
related_topics:
  - Hash Table
  - String
return: Done
---

# Problem: 3121. Count The Number Of Special Characters Ii

## Description
special characters where index lower < index upper

## Approach / Thoughts
same as prev, keep track of indexes

## Solution
```python
class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        indexes = {}

        for index, ch in enumerate(word):
            if 'a' <= ch <= 'z':
                indexes[ch] = index
            else:
                if ch not in indexes:
                    indexes[ch] = index

        count = 0
        wset = set(word)
        for i in range(26):
            lower = chr(i + 97)
            upper = chr(i + 65)

            if lower in wset and upper in wset:
                if indexes[lower] < indexes[upper]:
                    count += 1
        return count
```
