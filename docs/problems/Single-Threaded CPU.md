---
date: 2024-06-25
difficulty: Medium
num: 1834
related_topics:
  - Array
  - Heap (Priority Queue)
  - Sorting
return: Done
---

# Problem: 1834. Single Threaded Cpu

## Description
find order of tasks

## Approach / Thoughts
add heap tasks which are available

choose least process, add time

check case where time needs to be reset

## Solution
```python
class Solution:
    def getOrder(self, tasks: List[List[int]]) -> List[int]:
        for i, t in enumerate(tasks):
            t.append(i)
        tasks.sort(key=lambda x:x[0])

        i, time = 0, tasks[0][0]
        res, available = [], []

        while available or i < len(tasks):
            while i < len(tasks) and time >= tasks[i][0]:
                heapq.heappush(available, (tasks[i][1], tasks[i][2]))
                i += 1
            
            if available:
                p, index = heapq.heappop(available)
                time += p
                res.append(index)
            else:
                time = tasks[i][0]
        return res
```
