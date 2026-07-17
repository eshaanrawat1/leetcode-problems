---
date: 2024-01-22
difficulty: Medium
num: 2405
related_topics:
  - Greedy
  - Hash Table
  - String
return: Done
---

# Problem: 2405. Optimal Partition Of String

## Description
Find the minimum number of substrings to create substring where each substring has unique characters.

## Approach / Thoughts
Use set and count how many slices are needed to make optimal strings.

## Solution
```python
class Solution:
    def partitionString(self, s: str) -> int:
        unique = set()
        count = 1
        for ch in s:
            if ch in unique:
                unique.clear()
                unique.add(ch)
                count += 1
            else:
                unique.add(ch)
        return count
```
