---
date: 2023-11-01
difficulty: Medium
num: 11
related_topics:
  - Array
  - Greedy
  - Two-Pointer
return: Done
---

# Problem: 11. Container With Most Water

## Description
To find the container with the most water based on lines. In the picture, the height is the value of the height at index whatever.

![[Attachments/Untitled 6.png|Untitled 6.png]]

## Approach / Thoughts
My approach was to use two pointers and maximize the distance and the water. Start one pointer and front, other at end. Take the volume by calculating minimum height * distance. Then, throw away the smaller one greedily and increment whichever pointer.

## Solution
```python
class Solution:
    def maxArea(self, height: List[int]) -> int:

        l, r = 0, len(height) - 1
        volume = 0

        while l < r:
            current = min(height[l], height[r]) * (r-l)
            volume = max(volume, current)

            if height[l] < height[r]:
                l += 1
            else:
                r -= 1

        return volume
```
