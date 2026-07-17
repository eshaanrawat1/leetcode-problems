---
date: 2024-10-15
difficulty: Medium
num: 1405
related_topics:
  - Greedy
  - Heap (Priority Queue)
  - String
return: Review
---

# Problem: 1405. Longest Happy String

## Description
same, 2s at a time

## Approach / Thoughts
choose from biggest pile 2 and pad with 1s, otherwise pad with 2s

## Solution
```python
class Solution:
    def longestDiverseString(self, a: int, b: int, c: int) -> str:
        
        def longestString(a, b, c, aa='a', bb='b', cc='c'):
            if a < b:
                return longestString(b, a, c, bb, aa, cc)
            elif b < c:
                return longestString(a, c, b, aa, cc, bb)
            elif b == 0:
                return min(a, 2) * aa

            use_a = min(2, a)
            use_b = 1 if a - use_a >= b else 0 

            first = use_a * aa + use_b * bb 
            second = longestString(a - use_a, b - use_b, c, aa, bb, cc)

            return first + second

        return longestString(a, b, c)
```
