---
date: 2024-10-05
difficulty: Medium
num: 3295
related_topics:
  - Array
  - Hash Table
  - String
return: Done
---

# Problem: 3295. Report Spam Message

## Description

## Approach / Thoughts
check words in set

## Solution
```python
class Solution:
    def reportSpam(self, message: List[str], bannedWords: List[str]) -> bool:
        bannedWords = set(bannedWords)

        return sum(1 for w in message if w in bannedWords) >= 2
```
