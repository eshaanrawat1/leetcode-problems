---
date: 2024-01-12
difficulty: Easy
num: 1704
related_topics:
  - Counting
  - String
return: Done
---

# Problem: 1704. Determine If String Halves Are Alike

## Description
If two halves of a string have the same number of vowels (lower or upper) return true.

## Approach / Thoughts
Initially, set lowercase and add count to dict.

## Solution
```python
class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        s = s.lower()
        mid = len(s) // 2
        first = {'a': 0, 'e': 0, 'i': 0, 'o': 0, "u": 0}
        second = {'a': 0, 'e': 0, 'i': 0, 'o': 0, "u": 0}

        for ch in s[:mid]:
            if ch in first:
                first[ch] += 1
        
        for ch in s[mid:]:
            if ch in second:
                second[ch] += 1

        return sum(first.values()) == sum(second.values())
```
