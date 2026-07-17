---
date: 2024-04-10
difficulty: Medium
num: 950
related_topics:
  - Array
  - Queue
  - Simulation
  - Sorting
return: Done
---

# Problem: 950. Reveal Cards In Increasing Order

## Description
Same as problem

## Approach / Thoughts
Simulate reveal

## Solution
```python
class Solution:
    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
        deck.sort()
        q = deque([i for i in range(len(deck))])

        res = [0] * len(deck)
        for i in range(len(deck)):
            res[q.popleft()] = deck[i]
            if q:
                q.append(q.popleft())
        return res
```
