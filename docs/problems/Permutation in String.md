---
date: 2024-02-13
difficulty: Medium
num: 567
related_topics:
  - Hash Table
  - Sliding Window
  - String
  - Two-Pointer
return: Done
---

# Problem: 567. Permutation In String

## Description
Find if s2 contains a permutation of s1

## Approach / Thoughts
Check if s2 is smaller than s1, if it is return False

Use fixed size sliding window to check if frequency arrays are equal

## Solution
```python
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s2) < len(s1): return False
        have = [0] * 26
        need = [0] * 26
        for i in range(len(s1)):
            have[ord(s2[i])-ord('a')] += 1
            need[ord(s1[i])-ord('a')] += 1

        for i in range(len(s1), len(s2)):
            if have == need:
                return True
            have[ord(s2[i])-ord('a')] += 1
            have[ord(s2[i-len(s1)])-ord('a')] -= 1
        return have == need
```
