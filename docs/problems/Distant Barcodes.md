---
date: 2024-12-22
difficulty: Medium
num: 1054
related_topics:
  - Array
  - Counting
  - Greedy
  - Hash Table
  - Heap (Priority Queue)
  - Sorting
return: Done
---

# Problem: 1054. Distant Barcodes

## Description
no same adjacent codes

## Approach / Thoughts
heap push max freq greedy

## Solution
```python
class Solution:
    def rearrangeBarcodes(self, barcodes: List[int]) -> List[int]:
        N = len(barcodes)

        cnt = Counter(barcodes)
        pq = [(-cnt[c], c) for c in cnt]
        heapq.heapify(pq)

        res = []
        cooldown = deque()
        time = 0

        while pq or cooldown:
            if pq:
                amt, num = heapq.heappop(pq)
                amt *= -1
                if not amt:
                    continue

                res.append(num)
                amt -= 1

                cooldown.append((-amt, num))
                
            if time and cooldown:
                time = 0
                heapq.heappush(pq, cooldown[0])
                cooldown.popleft()
            time = 1
        return res
        
```
