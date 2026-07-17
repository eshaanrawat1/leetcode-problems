---
date: 2024-11-23
difficulty: Medium
num: 1861
related_topics:
  - Array
  - Matrix
  - Two-Pointer
return: Done
---

# Problem: 1861. Rotating The Box

## Description
rotate 90 degrees

## Approach / Thoughts
shift right then transpose

## Solution
```python
class Solution:
    def rotateTheBox(self, box: List[List[str]]) -> List[List[str]]:
        m, n = len(box), len(box[0])
        res = [['.'] * n for _ in range(m)]

        def fill(row, l, r, feathers):
            for i in range(r, l-1, -1):
                if feathers:
                    res[row][i] = '#'
                    feathers -= 1

        for r in range(m):
            l = feathers = 0

            for c in range(n):
                if box[r][c] == '#':
                    feathers += 1
                if box[r][c] == '*':
                    fill(r, l, c-1, feathers)
                    feathers = 0
                    l = c + 1
            fill(r, l, n-1, feathers)

        for r in range(m):
            for c in range(n):
                if box[r][c] == '*':
                    res[r][c] = '*'

        transpose = []
        for col in range(n):
            column = [res[r][col] for r in range(m)]
            transpose.append(column[::-1])

        return transpose
```
