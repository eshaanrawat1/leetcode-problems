---
date: 2023-12-04
difficulty: Easy
num: 1688
related_topics:
  - Math
  - Simulation
return: Done
---

# Problem: 1688. Count Of Matches In Tournament

## Description
How many matches to find winner of tournament

## Approach / Thoughts
Just sum all the matches depending on whether they were even or odd.

## Solution
```python
class Solution:
    def numberOfMatches(self, n: int) -> int:
        count = 0
        while n > 1:
            if n % 2 == 0:
                n /= 2
                count += n
            else:
                n = (n + 1) / 2
                count += n - 1
            
        return int(count)
```
