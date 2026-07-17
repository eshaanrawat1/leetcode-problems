---
date: 2024-04-05
difficulty: Medium
num: 128
related_topics:
  - Array
  - Hash Table
  - Union Find
return: Done
---

# Problem: 128. Longest Consecutive Sequence

## Description
Same as problem

## Approach / Thoughts
Make it in a set and walk each streak starting at number that is the start of sequence

## Solution
```python
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums_set = set(nums)
        result = 0

        for x in nums_set:
            if x-1 not in nums_set:
                y = x
                while y in nums_set:
                    y += 1
                result = max(result, y-x)
        return result
```
