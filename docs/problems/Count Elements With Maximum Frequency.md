---
date: 2024-01-15
difficulty: Easy
num: 3005
related_topics:
  - Array
  - Hash Table
return: Done
---

# Problem: 3005. Count Elements With Maximum Frequency

## Description
Find all elements with max frequency, return sum of max frequencies.

## Approach / Thoughts
Use a counter and find the max frequency from the values of the counter. Iterate through the counter values and sum all instances of max frequency and return.

## Solution
```python
class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        c = Counter(nums)
        curr_max = max(c.values())
    
        total = 0
        for val in c.values():
            if val == curr_max:
                total += val

        return total
```
