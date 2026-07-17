---
date: 2025-05-23
difficulty: Easy
num: 2942
related_topics:
  - Array
  - String
return: Done
---

# Problem: 2942. Find Words Containing Character

## Description

## Approach / Thoughts
count it

## Solution
```python
class Solution:
    def findWordsContaining(self, words: List[str], x: str) -> List[int]:
        return [i for i, w in enumerate(words) if x in w]
```
