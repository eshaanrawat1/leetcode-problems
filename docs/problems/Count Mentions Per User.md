---
date: 2025-12-13
difficulty: Medium
num: 3433
related_topics:
  - Array
  - Math
  - Simulation
  - Sorting
return: Done
---

# Problem: 3433. Count Mentions Per User

## Description

## Approach / Thoughts
lots of parsing and sorting

sorted set for online and mono q for timestamps

## Solution
```python
from sortedcontainers import SortedSet

class Solution:
    def countMentions(self, numberOfUsers: int, events: List[List[str]]) -> List[int]:
        events.sort(key = lambda x: (int(x[1]), -ord(x[0][0])))
        
        offline = deque()
        online = SortedSet(list(range(numberOfUsers)))

        mentions = [0] * numberOfUsers

        for msg, t, x in events:
            t = int(t)

            while offline and offline[0][0] <= t:
                ct, cx = offline.popleft()
                online.add(cx)

            if msg == 'MESSAGE':
                if x == 'ALL':
                    for i in range(numberOfUsers):
                        mentions[i] += 1
                elif x == 'HERE':
                    for k in online:
                        mentions[k] += 1
                else:
                    for k in x.split():
                        mentions[int(k[2:])] += 1
            else:
                x = int(x)
                online.remove(x)
                offline.append((t+60, x))

        return mentions
```
