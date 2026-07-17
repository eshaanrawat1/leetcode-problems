---
date: 2025-09-15
difficulty: Easy
num: 1935
related_topics:
  - Hash Table
  - String
return: Done
---

# Problem: 1935. Maximum Number Of Words You Can Type

## Description
same broken keys

## Approach / Thoughts
iterate

## Solution
```python
class Solution:
    def canBeTypedWords(self, text: str, brokenLetters: str) -> int:
        bad = total = 0

        broken = set(brokenLetters)
        for word in text.split(' '):
            for ch in word:
                if ch in broken:
                    bad += 1
                    break
            total += 1
        return total - bad
```
