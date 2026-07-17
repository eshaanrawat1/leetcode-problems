---
date: 2024-07-01
difficulty: Easy
num: 933
related_topics:
  - Data Stream
  - Design
  - Queue
return: Done
---

# Problem: 933. Number Of Recent Calls

## Description
make calls, pop all calls where distance is > 3000

## Approach / Thoughts
queue and pop

## Solution
```python
class RecentCounter:

    def __init__(self):
        self.q = deque([])
        self.sz = 0
        

    def ping(self, t: int) -> int:
        self.q.append(t)
        self.sz += 1

        while self.q and t - self.q[0] > 3000:
            self.q.popleft()
            self.sz -= 1
            
        return self.sz


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)
```
