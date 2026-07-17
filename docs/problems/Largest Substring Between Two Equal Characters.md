---
date: 2023-12-31
difficulty: Easy
num: 1624
related_topics:
  - Hash Table
  - String
return: Done
---

# Problem: 1624. Largest Substring Between Two Equal Characters

## Description
Same as title, find length

## Approach / Thoughts
Add visited characters to a hashmap that stores the indices. If the current character in the traversal is found in the map, store the length of the substring in between and keep the max, return max at the end.

## Solution
```python
class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        counts = {}
        curr_max = -1

        for i in range(len(s)):
            if s[i] in counts:
                curr_max = max(curr_max, i - counts[s[i]] - 1)
            else:
                counts[s[i]] = i
        return curr_max
```
