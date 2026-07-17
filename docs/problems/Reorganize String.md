---
date: 2024-10-01
difficulty: Medium
num: 767
related_topics:
  - Counting
  - Greedy
  - Hash Table
  - Heap (Priority Queue)
  - Sorting
  - String
return: Done
---

# Problem: 767. Reorganize String

## Description
same, no adjacent characters

## Approach / Thoughts
most frequent and second most

## Solution
```python
class Solution:
    def reorganizeString(self, s: str) -> str:
        freq = Counter(s)

        pq = []
        for k, v in freq.items():
            heapq.heappush(pq, [-v, k])

        res = []
        while pq:
            cnt, letter = heapq.heappop(pq)

            if cnt == 0:
                continue

            if res and letter == res[-1]:
                if not pq:
                    return ""
                else:
                    cnt2, letter2 = heapq.heappop(pq)
                    res.append(letter2)

                    heapq.heappush(pq, [cnt2+1, letter2])
                    heapq.heappush(pq, [cnt, letter])
            else:
                res.append(letter)
                heapq.heappush(pq, [cnt+1, letter])
        return ''.join(res)
```
