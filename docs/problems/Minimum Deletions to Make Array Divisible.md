---
date: 2024-12-08
difficulty: Hard
num: 2344
related_topics:
  - Array
  - Heap (Priority Queue)
  - Math
  - Number Theory
  - Sorting
return: Done
---

# Problem: 2344. Minimum Deletions To Make Array Divisible

## Description
delete from array 1 so that min element from it divides all others in array 2

## Approach / Thoughts
find gcd of array 2, find number of deletions

## Solution
```python
class Solution:
    def minOperations(self, nums: List[int], numsDivide: List[int]) -> int:
        divs = list(set(numsDivide))

        res = divs[0]
        for i in range(1, len(divs)):
            res = gcd(res, divs[i])
        
        pq = nums
        heapq.heapify(pq)

        cnt = 0
        while pq and res % pq[0]:
            heapq.heappop(pq)
            cnt += 1
        
        return cnt if pq else -1
```
