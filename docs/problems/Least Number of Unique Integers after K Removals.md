---
date: 2024-02-15
difficulty: Medium
num: 1481
related_topics:
  - Array
  - Counting
  - Greedy
  - Hash Table
  - Sorting
return: Done
---

# Problem: 1481. Least Number Of Unique Integers After K Removals

## Description
With k removals, find the least number of unique elements after removals

## Approach / Thoughts
Make values frequency array and sort it

Greedy remove smallest elements

If there is leftover when subtracting k, include that index

Answer is number of elements to the right of index

## Solution
```python
class Solution:
    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
        c1 = Counter(arr)
        vals = list(c1.values())
        vals.sort()

        idx = 0
        for i in range(len(vals)):
            if k <= 0: break
            k -= vals[i]
            idx += 1
        
        return len(vals) - idx+1 if k < 0 else len(vals) - idx
```
