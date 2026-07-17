---
date: 2024-02-22
difficulty: Easy
num: 2273
related_topics:
  - Array
  - Hash Table
  - Sorting
  - String
return: Done
---

# Problem: 2273. Find Resultant Array After Removing Anagrams

## Description
Remove all consecutive anagrams

## Approach / Thoughts
Have array and add if it isnt equal to last like stack

## Solution
```python
class Solution:
    def removeAnagrams(self, words: List[str]) -> List[str]:
        res = []

        for i, w in enumerate(words):
            if not res or Counter(w) != Counter(res[-1]):
                res.append(w)
        return res
```
