---
date: 2024-12-21
difficulty: Hard
num: 2940
related_topics:
  - Array
  - Binary Indexed Tree
  - Binary Search
  - Heap (Priority Queue)
  - Monotonic Stack
  - Segment Tree
  - Stack
return: Review
---

# Problem: 2940. Find Building Where Alice And Bob Can Meet

## Description

## Approach / Thoughts
what even was that bro

## Solution
```python
class Solution:
    def leftmostBuildingQueries(self, heights: List[int], queries: List[List[int]]) -> List[int]:
        H = len(heights)
        Q = len(queries)

        res = [-1] * Q
        qs = [[] for _ in range(H)]

        for i, q in enumerate(queries):
            a, b = sorted(q)
            if a == b or heights[a] < heights[b]:
                res[i] = b
            else:
                qs[b].append((heights[a], i))

        mono = []
        def bs(h):
            l, r, ans = 0, len(mono)-1, -inf
            while l <= r:
                m = (l + r) // 2
                if mono[m][0] > h:
                    ans = max(ans, m)
                    l = m + 1
                else:
                    r = m - 1
            return ans

        
        for i in range(H-1, -1, -1):
            sz = len(mono)
            for a, b in qs[i]:
                pos = bs(a)
                if 0 <= pos < sz:
                    res[b] = mono[pos][1]
            while mono and mono[-1][0] <= heights[i]:
                mono.pop()
            mono.append((heights[i], i))
        return res
```
