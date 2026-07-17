---
date: 2024-06-30
difficulty: Easy
num: 3200
related_topics:
  - Math
return: Done
---

# Problem: 3200. Maximum Height Of A Triangle

## Description
find mim height of triangle

## Approach / Thoughts
see which levels we can make and check cases where level is incomplete

## Solution
```python
class Solution:
    def maxHeightOfTriangle(self, red: int, blue: int) -> int:
        def start(first, second):
            n = 1

            while True:
                if n % 2 == 1:
                    first -= n
                else:
                    second -= n

                if first < 0 or second < 0:
                    return n - 1
                if first == 0 and second == 0:
                    return n
                    
                n += 1

        return max(start(red, blue), start(blue, red))
```
