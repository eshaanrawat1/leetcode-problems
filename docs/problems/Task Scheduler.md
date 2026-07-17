---
date: 2024-06-19
difficulty: Medium
num: 621
related_topics:
  - Array
  - Counting
  - Greedy
  - Hash Table
  - Heap (Priority Queue)
  - Sorting
return: Done
---

# Problem: 621. Task Scheduler

## Description
schedule tasks

## Approach / Thoughts
maxheap and circle tasks until we run out

## Solution
```python
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        counts = [-v for v in Counter(tasks).values()]
        heapq.heapify(counts) 

        time = 0
        q = deque([])

        while q or counts:
            time += 1
            if counts:
                current = 1 + heapq.heappop(counts)
                if current:
                    q.append([current, time+n])
            
            if q and q[0][1] == time:
                c, t = q.popleft()
                heapq.heappush(counts, c)
        return time
```
