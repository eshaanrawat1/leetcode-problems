---
date: 2024-01-03
difficulty: Easy
num: 205
related_topics:
  - Hash Table
  - String
return: Done
---

# Problem: 205. Isomorphic Strings

## Description
Check if two strings are isomorphic

- each character maps to one character uniquely only

## Approach / Thoughts
Add each character and its mappings in a dict, then add values to a set

- if dict key is already taken return false

- if value is not unique (2 keys to 1 val) return false

## Solution
```python
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        matches = {}

        if len(s) != len(t):
            return False

        for i in range(len(s)):
            if s[i] in matches and matches[s[i]] != t[i]:
                return False

            matches[s[i]] = t[i]

        unique = set()
        for key, val in matches.items():
            if val in unique:
                return False
            unique.add(val)
        return True
```
