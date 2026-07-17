---
date: 2025-12-17
difficulty: Medium
num: 3081
related_topics:
  - Counting
  - Greedy
  - Hash Table
  - Heap (Priority Queue)
  - Sorting
  - String
return: Done
---

# Problem: 3081. Replace Question Marks In String To Minimize Its Value

## Description

## Approach / Thoughts
heap for min character frequency

cost is same regardless of placement, sort replacement chars

## Solution
```python
class Solution:
    def minimizeStringValue(self, s: str) -> str:
        alpha = [chr(i+97) for i in range(26)]

        freq = Counter(s)
        pq = [(freq[c], c) for c in alpha]
        heapq.heapify(pq)
        
        qs = []

        for c in s:
            if c != '?':
                continue 

            min_freq, min_ch = heapq.heappop(pq)
            heapq.heappush(pq, (min_freq+1, min_ch))
            qs.append(min_ch)
            
        qs.sort(reverse=True)
        
        res = []
        for c in s:
            if c != '?':
                res.append(c)
                continue
            res.append(qs.pop())
        return ''.join(res)
```
