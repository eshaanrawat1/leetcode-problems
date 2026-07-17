---
date: 2024-09-02
difficulty: Medium
num: 1894
related_topics:
  - Array
  - Binary Search
  - Prefix Sum
  - Simulation
return: Done
---

# Problem: 1894. Find The Student That Will Replace The Chalk

## Description
same, circular

## Approach / Thoughts
mod of sum to find number of complete circles, then 1 pass

## Solution
```python
class Solution:
    def chalkReplacer(self, chalk: List[int], k: int) -> int:
        mod = k % sum(chalk)

        for i, c in enumerate(chalk):
            if mod - c < 0:
                return i
            mod -= c
```
