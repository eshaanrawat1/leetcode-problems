---
date: 2024-01-02
difficulty: Medium
num: 2125
related_topics:
  - Array
  - Math
  - Matrix
  - String
return: Done
---

# Problem: 2125. Number Of Laser Beams In A Bank

## Description
Find number of laser connections between adjacent rows

## Approach / Thoughts
Add all nonempty number of lasers in each row to an array. Multiply all adjacent pairs and take the sums.

## Solution
```python
class Solution:
    def numberOfBeams(self, bank: List[str]) -> int:
        total = 0
        res = []

        for s in bank:
            curr = 0
            for ch in s:
                if ch == '1':
                    curr += 1
            
            if curr > 0:
                res.append(curr)

        for i in range(1, len(res)):
            total += (res[i] * res[i - 1])

        return total
```
