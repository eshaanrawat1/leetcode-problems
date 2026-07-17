---
date: "2026-07-15"
difficulty: "Hard"
rating: 2053
num: "3072"
related_topics:
  - "array"
  - "binary-indexed-tree"
  - "segment-tree"
  - "simulation"
  - "ordered-set"
return:
---

# Problem: 3072. Distribute Elements Into Two Arrays II

## Approach / Thoughts

set up first and second elements separately
use sorted list with bisect to keep track of how many elements are strictly greater

## Solution

```python
from sortedcontainers import SortedList

class Solution:
    def resultArray(self, nums: List[int]) -> List[int]:
        # 8:09
        
        arr1 = SortedList()
        arr2 = SortedList()

        a1 = []
        a2 = []

        def greater_count(arr, val):
            j = arr.bisect_right(val)
            return len(arr) - j


        for i, x in enumerate(nums):
            if i == 0:
                arr1.add(x)
                a1.append(x)
                continue
            if i == 1:
                arr2.add(x)
                a2.append(x)
                continue

            g1 = greater_count(arr1, x)
            g2 = greater_count(arr2, x)

            if g1 > g2:
                arr1.add(x)
                a1.append(x)
            elif g1 < g2:
                arr2.add(x)
                a2.append(x)
            else:
                if len(a1) <= len(a2):
                    arr1.add(x)
                    a1.append(x)
                else:
                    arr2.add(x)
                    a2.append(x)
        return a1 + a2
```
