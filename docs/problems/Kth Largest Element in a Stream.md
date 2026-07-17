---
date: 2024-05-16
difficulty: Easy
num: 703
related_topics:
  - BST
  - Binary Tree
  - Data Stream
  - Design
  - Heap (Priority Queue)
  - Tree
return: Done
---

# Problem: 703. Kth Largest Element In A Stream

## Description

## Approach / Thoughts
min heap keep track of k elements

## Solution
```python
class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.minHeap = nums[:]
        self.length = len(nums)
        self.k = k

        heapq.heapify(self.minHeap)
        while self.length > k:
            heapq.heappop(self.minHeap)
            self.length -= 1

    def add(self, val: int) -> int:
        heapq.heappush(self.minHeap, val)
        self.length += 1

        if self.length > self.k:
            heapq.heappop(self.minHeap)
            self.length -= 1

        return self.minHeap[0]


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
```
