---
date: 2024-02-03
difficulty: Hard
num: 42
related_topics:
  - Array
  - Dynamic Programming
  - Monotonic Stack
  - Stack
  - Two-Pointer
return: Review
---

# Problem: 42. Trapping Rain Water

## Description
Find volume of rain water that can be trapped given a height array

## Approach / Thoughts
Use a prefix array to calculate the max to the left and right at a given index (naive)

Calculate the amount of water that can be stored at each index using min of left and right minus height

## Solution
```python
class Solution:
    def trap(self, height: List[int]) -> int:
        left_max, right_max = [0] * len(height), [0] * len(height)
        for i in range(1, len(left_max)):
            left_max[i] = max(left_max[i-1], height[i-1])
        
        for i in range(len(right_max)-2, -1, -1):
            right_max[i] = max(right_max[i+1], height[i+1])
        
        total = 0
        for i in range(len(height)):
            vol = min(left_max[i], right_max[i]) - height[i]
            if vol > 0:
                total += vol
        return total
```
