---
date: 2024-01-17
difficulty: Easy
num: 1207
related_topics:
  - Array
  - Hash Table
return: Done
---

# Problem: 1207. Unique Number Of Occurrences

## Description
If all numbers in array have a unique frequency return true.

## Approach / Thoughts
Use counter to get frequency of all nums in the array. Return if the length of the values (frequencies) is the same as the length of the set of values which stores unique frequencies.

## Solution
```python
class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        c1 = Counter(arr)
        return len(c1.values()) == len(set(c1.values()))
```
