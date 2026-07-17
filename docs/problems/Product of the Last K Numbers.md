---
date: 2025-02-13
difficulty: Medium
num: 1352
related_topics:
  - Array
  - Data Stream
  - Design
  - Math
  - Prefix Sum
return: Done
---

# Problem: 1352. Product Of The Last K Numbers

## Description

## Approach / Thoughts
binary search check where zeroes are

## Solution
```python
class ProductOfNumbers:
    from sortedcontainers import SortedSet

    def __init__(self):
        self.og = []
        self.nums = []

        self.idx = 0
        self.zeroes = SortedSet()
        

    def add(self, num: int) -> None:
        self.idx += 1
        self.og.append(num)

        if num == 0:
            self.nums.append(1)
            self.zeroes.add(self.idx-1)
            return

        if self.nums:
            self.nums.append(num * self.nums[-1])
            return

        self.nums.append(num)
    
    def getProduct(self, k: int) -> int:
        start = len(self.nums) - k
        pos = bisect_left(self.zeroes, start)

        if self.og[start] == 0:
            return 0

        while pos < len(self.zeroes):
            if self.zeroes[pos]:
                return 0
            pos += 1

        if k == len(self.nums):
            return self.nums[-1]

        return self.nums[-1] // self.nums[start-1]



# Your ProductOfNumbers object will be instantiated and called as such:
# obj = ProductOfNumbers()
# obj.add(num)
# param_2 = obj.getProduct(k)
```
