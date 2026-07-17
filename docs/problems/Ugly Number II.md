---
date: 2024-08-17
difficulty: Medium
num: 264
related_topics:
  - Dynamic Programming
  - Hash Table
  - Heap (Priority Queue)
  - Math
return: Done
---

# Problem: 264. Ugly Number Ii

## Description
same, find nth ugly number

## Approach / Thoughts
binary search, see if we can find at least n ugly numbers, keep going to the left as long as we can, eventually find the number that is the nth ugliest

## Solution
```python
class Solution:
    def nthUglyNumber(self, n: int) -> int:   
             
        def make(threshold):
            q = deque([1])
            cnt = 0

            visit = set()
            while q:
                cur = q.popleft()

                if cnt == n:
                    return True
                
                if cur > threshold or cur in visit:
                    continue
                visit.add(cur)

                cnt += 1

                q.append(cur * 2)
                q.append(cur * 3)
                q.append(cur * 5)

            return False

        l, r = 0, 10000000000
        res = None

        while l <= r:
            m = (l + r) // 2
            if make(m):
                res = m
                r = m - 1
            else:
                l = m + 1
        return res
```
