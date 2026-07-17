---
date: 2026-06-28
difficulty: Easy
num: 1967
related_topics:
  - Array
  - String
return:
---

# Problem: 1967. Number of Strings That Appear as Substrings in Word

## Description
Given an array of strings `patterns` and a string `word`, return *the **number** of strings in *`patterns`* that exist as a **substring** in *`word`.

A **substring** is a contiguous sequence of characters within a string.

## Approach / Thoughts
same

## Solution
```python
class Solution:
    def numOfStrings(self, patterns: List[str], word: str) -> int:
        return sum(1 if p in word else 0 for p in patterns)
```