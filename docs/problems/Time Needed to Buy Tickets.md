---
date: 2024-04-08
difficulty: Easy
num: 2073
related_topics:
  - Array
  - Queue
  - Simulation
return: Done
---

# Problem: 2073. Time Needed To Buy Tickets

## Description
Some simulation

## Approach / Thoughts
Follow simulation trace out indices in front and behind

## Solution
```python
class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        seconds = 0
        for i in range(len(tickets)):
            if i <= k:
                seconds += min(tickets[i], tickets[k])
            else:
                seconds += min(tickets[i], tickets[k]-1)
        return seconds
```
