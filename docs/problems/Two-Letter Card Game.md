---
date: 2026-01-26
difficulty: Medium
num: 3664
related_topics:
  - Array
  - Counting
  - Enumeration
  - Hash Table
  - Sorting
return: Review
---

# Problem: 3664. Two Letter Card Game

## Description
same, compatible cards differ in 1 position exactly

## Approach / Thoughts
counting principles, can group x? together and ?x togther

keep xx as a wildcard that can match either

do math to find max available space in a group, find free cards

pair wild cards with free cards then break up pairs if possible

## Solution
```python
class Solution:
    def score(self, cards: List[str], x: str) -> int:
        wild = 0
        lcnt = [0] * 10  # x?
        rcnt = [0] * 10  # ?x

        for a, b in cards:
            if a == b == x:
                wild += 1
            elif a == x:
                lcnt[ord(b) - 97] += 1
            elif b == x:
                rcnt[ord(a) - 97] += 1

        pairs = free = 0
        for group in [lcnt, rcnt]:
            total = sum(group)
            max_freq = max(group)
            gpair = min(total - max_freq, total // 2)

            pairs += gpair
            free += total - 2 * gpair    

        used = min(wild, free)
        wild -= used 

        extra = min(pairs, wild // 2)
        return pairs + used + extra
```
