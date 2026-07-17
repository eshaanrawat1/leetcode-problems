---
date: 2025-01-11
difficulty: Medium
num: 1400
related_topics:
  - Counting
  - Greedy
  - Hash Table
  - String
return: Done
---

# Problem: 1400. Construct K Palindrome Strings

## Description

## Approach / Thoughts
count odd freq of letters, alone palindrome

## Solution
```python
class Solution:
    def canConstruct(self, s, k):
        return sum(i & 1 for i in collections.Counter(s).values()) <= k <= len(s)
        
```
