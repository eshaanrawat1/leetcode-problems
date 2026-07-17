---
date: 2024-09-11
difficulty: Easy
num: 1684
related_topics:
  - Array
  - Bit Manipulation
  - Counting
  - Hash Table
  - String
return: Done
---

# Problem: 1684. Count The Number Of Consistent Strings

## Description

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        a = {c for c in allowed}
        count = 0

        for w in words:
            flag = True
            for c in w:
                if c not in a:
                    flag = False
                    break
            if flag:
                count += 1
        return count
```
