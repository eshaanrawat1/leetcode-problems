---
date: 2024-04-13
difficulty: Hard
num: 84
related_topics:
  - Array
  - Monotonic Stack
  - Stack
return: Review
---

# Problem: 84. Largest Rectangle In Histogram

## Description
Same as problem

## Approach / Thoughts
Keep track of how far front and back each height can extend, calculate max area when popping

1. Enumerate

1. If can’t extend right, start popping and calculating max area

1. If stack still has values after this process, pop and calculate

## Solution
```python
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        max_area = 0
        stack = []

        for index, height in enumerate(heights):
            start = index
            while stack and stack[-1][-1] > height:
                i, h = stack.pop()
                max_area = max(max_area, (index-i)*h)
                start = i
            stack.append((start, height))

        N = len(heights)
        for i in range(len(stack)):
            idx, h = stack.pop()
            max_area = max(max_area, (N-idx) * h)
        return max_area
```
