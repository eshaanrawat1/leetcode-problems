---
date: 2025-03-23
difficulty: Medium
num: 3143
related_topics:
  - Array
  - Binary Search
  - Hash Table
  - Sorting
  - String
return: Done
---

# Problem: 3143. Maximum Points Inside The Square

## Description
same, no points with the same tag

## Approach / Thoughts
binary search on possible side lengths

## Solution
```python
class Solution:
    def maxPointsInsideSquare(self, points: List[List[int]], s: str) -> int:
        pairs = [(max(abs(p[0]), abs(p[1])), t) for p,t in zip(points, s)]
        pairs.sort()

        def valid(threshold):
            freq = Counter()
            cnt = 0

            for p, t in pairs:
                if p > threshold:
                    break

                freq[t] += 1
                if freq[t] > 1:
                    return 0
                cnt += 1
            return cnt

        
        l, r = pairs[0][0], pairs[-1][0]
        res = 0

        while l <= r:
            m = (l + r) // 2
            ans = valid(m)

            if ans:
                l = m + 1
                res = ans
            else:
                r = m - 1
        return res
```
