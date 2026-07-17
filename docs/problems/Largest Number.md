---
date: 2024-08-01
difficulty: Medium
num: 179
related_topics:
  - Array
  - Greedy
  - Sorting
  - String
return: Done
---

# Problem: 179. Largest Number

## Description

## Approach / Thoughts
use string compare for additions

custom wrapper class

## Solution
```python
class Wrapper:
    def __init__(self, val):
        self.val = val

    def __lt__(self, other):
        return self.val + other.val < other.val + self.val

    def __eq__(self, other):
        return self.val + other.val == other.val + self.val


class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        w = [Wrapper(str(n)) for n in nums]

        w.sort(reverse=True)
        return ''.join(n.val for n in w).lstrip('0') or '0'
```
