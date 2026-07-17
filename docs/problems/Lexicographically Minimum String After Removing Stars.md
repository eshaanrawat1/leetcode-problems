---
date: 2025-06-06
difficulty: Medium
num: 3170
related_topics:
  - Greedy
  - Hash Table
  - Heap (Priority Queue)
  - Stack
  - String
return: Done
---

# Problem: 3170. Lexicographically Minimum String After Removing Stars

## Description
same, for each * remove smallest character to the left

## Approach / Thoughts
remove smallest character at latest index to make smallest string at the end

use heap to track characters and indices

## Solution
```python
class Solution:
    def clearStars(self, s: str) -> str:
        pq = []
        for i, c in enumerate(s):
            if c == '*':
                heapq.heappop(pq)
            else:
                heapq.heappush(pq, [c, -i])
        
        pq.sort(key=lambda x: -x[1])
        return ''.join([c[0] for c in pq])
```
