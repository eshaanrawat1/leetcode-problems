---
date: 2024-12-07
difficulty: Medium
num: 2326
related_topics:
  - Design
  - Hash Table
  - Heap (Priority Queue)
  - Ordered Set
return: Done
---

# Problem: 2326. Smallest Number In Infinite Set

## Description

## Approach / Thoughts
pq lazy evaluation

## Solution
```python
class SmallestInfiniteSet:

    def __init__(self):
        self.pq = list(range(1, 10000))
        heapq.heapify(self.pq)

    def popSmallest(self) -> int:
        v = heapq.heappop(self.pq)
        while self.pq[0] == v:
            heapq.heappop(self.pq)
        return v

    def addBack(self, num: int) -> None:
        heapq.heappush(self.pq, num)
        


# Your SmallestInfiniteSet object will be instantiated and called as such:
# obj = SmallestInfiniteSet()
# param_1 = obj.popSmallest()
# obj.addBack(num)
```
