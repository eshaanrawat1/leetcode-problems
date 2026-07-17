---
date: 2024-01-15
difficulty: Easy
num: 290
related_topics:
  - Hash Table
  - String
return: Done
---

# Problem: 290. Word Pattern

## Description
Find if a string matches a pattern, similar to isomorphic strings.

## Approach / Thoughts
Each letter in pattern must be matched to one and only one value.

- Add keys to dictionary, if a key is being added with a different value, false

- Check if the length of the set containing values is the same as the values, else false

## Solution
```python
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        sp = s.split(' ')

        # not same length, no pattern
        if len(pattern) != len(sp):
            return False

        # match letter to pattern, if one key to multiple values false
        matches = {}
        for i in range(len(pattern)):
            if pattern[i] in matches and sp[i] != matches[pattern[i]]:
                return False
            matches[pattern[i]] = sp[i]

        # if not all values are unique, false
        return len(matches.values()) == len(set(matches.values()))
```
