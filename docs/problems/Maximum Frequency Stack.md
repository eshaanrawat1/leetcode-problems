---
date: 2024-09-10
difficulty: Hard
num: 895
related_topics:
  - Design
  - Hash Table
  - Ordered Set
  - Stack
return: Done
---

# Problem: 895. Maximum Frequency Stack

## Description

## Approach / Thoughts
heap, keep track of max freq and recency

## Solution
```python
class FreqStack:

    def __init__(self):
        self.index = 0
        self.max_heap = []
        self.freq = defaultdict(int)

    def push(self, val: int) -> None:
        self.freq[val] += 1
        heapq.heappush(self.max_heap, (-self.freq[val], -self.index, val))
        self.index += 1

    def pop(self) -> int:
        f, i, v = heapq.heappop(self.max_heap)
        self.freq[v] -= 1
        return v

        


# Your FreqStack object will be instantiated and called as such:
# obj = FreqStack()
# obj.push(val)
# param_2 = obj.pop()
```
