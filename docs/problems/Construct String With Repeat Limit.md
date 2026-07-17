---
date: 2024-12-17
difficulty: Medium
num: 2182
related_topics:
  - Counting
  - Greedy
  - Hash Table
  - Heap (Priority Queue)
  - String
return: Done
---

# Problem: 2182. Construct String With Repeat Limit

## Description

## Approach / Thoughts
idk bro - tons of edge cases

greedy distribution

## Solution
```python
from sortedcontainers import SortedSet

class Solution:
    def repeatLimitedString(self, s: str, repeatLimit: int) -> str:
        cnt = Counter(s)
        pq = [(-ord(c), cnt[c]) for c in cnt]
        heapq.heapify(pq)

        res = [''] * len(s)
        av = SortedSet(list(range(len(s))))
        cooldown = []

        while pq:
            l, amt = heapq.heappop(pq)
            l = chr(-l)

            done = True
            while amt > 0 and done:
                k = min(repeatLimit, amt)
                while k:
                    if not av:
                        done = False
                        break

                    idx = av[0]
                    av.discard(idx)
                    res[idx] = l
                    amt -= 1

                    if av and av[0] - 1 == idx:
                        k -= 1
                    else:
                        k = min(repeatLimit, amt)

                if av:
                    if av[0] - idx == 1:
                        cooldown.append(av[0])
                        av.discard(av[0])

            for x in cooldown:
                av.add(x)
            cooldown = []
    
        
        for i in range(len(res)):
            if res[i] == '':
                return ''.join(res[:i])
        return ''.join(res)
```
