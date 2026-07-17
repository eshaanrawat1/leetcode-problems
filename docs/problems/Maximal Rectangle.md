---
date: 2024-04-13
difficulty: Hard
num: 85
related_topics:
  - Array
  - Dynamic Programming
  - Matrix
  - Monotonic Stack
  - Stack
return: Done
---

# Problem: 85. Maximal Rectangle

## Description
Max rectangle in binary array, every element has to be 1

## Approach / Thoughts
Break into each histogram and solve subproblems using 84, monotonic stack and checking

## Solution
```python
class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        # convert input matrix to ints
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                matrix[i][j] = int(matrix[i][j])


        histograms = [matrix[0]]
        total_max = 0

        # make histogram array
        for i in range(1, len(matrix)):
            temp = [0] * len(matrix[0])
            for j in range(0, len(matrix[0])):
                if matrix[i][j] != 0:
                    temp[j] = matrix[i][j] + histograms[-1][j]
                else:
                    temp[j] = 0
            histograms.append(temp)
        
        # calculate max of histograms
        for h in histograms:
            total_max = max(total_max, self.histogramHelper(h))
        return total_max

    def histogramHelper(self, nums):
        max_area = 0
        stack = []

        for index, height in enumerate(nums):
            start = index
            while stack and stack[-1][-1] > height:
                i, h = stack.pop()
                max_area = max(max_area, (index-i)*h)
                start = i
            stack.append((start, height))

        N = len(nums)
        for i in range(len(stack)):
            index, height = stack.pop()
            max_area = max(max_area, (N-index)*height)
        return max_area
```
