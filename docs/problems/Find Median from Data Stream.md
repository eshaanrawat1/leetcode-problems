---
date: 2024-06-28
difficulty: Hard
num: 295
related_topics:
  - Data Stream
  - Design
  - Heap (Priority Queue)
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 295. Find Median From Data Stream

## Description

## Approach / Thoughts
two heaps balance when needed

## Solution
```python
# small maxheap [17, 97, 25]
# large minheap [31, 42]

class MedianFinder:

    def __init__(self):
        self.small = []
        self.large = []
        

    def addNum(self, num: int) -> None:
        heapq.heappush(self.small, -num)

        # balance if needed
        if self.small and self.large and -self.small[0] > self.large[0]:
            heapq.heappush(self.large, -heapq.heappop(self.small))

        # uneven balancing
        if len(self.small) > len(self.large) + 1:
            heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.large) > len(self.small) + 1:
            heapq.heappush(self.small, -heapq.heappop(self.large))
        

    def findMedian(self) -> float:
        small_len, large_len = len(self.small), len(self.large)
        if small_len == large_len:
            return (-self.small[0] + self.large[0]) / 2
        elif small_len > large_len:
            return -self.small[0]
        else:
            return self.large[0]

# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()
```
