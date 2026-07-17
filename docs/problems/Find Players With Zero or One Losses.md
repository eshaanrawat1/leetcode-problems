---
date: 2024-01-14
difficulty: Medium
num: 2225
related_topics:
  - Array
  - Counting
  - Hash Table
  - Sorting
return: Done
---

# Problem: 2225. Find Players With Zero Or One Losses

## Description
In a 2D array, first element has winner of a match, second element has loser. Find players with one or zero loss and return all zero losses in one array, one losses in one array, sorted increasing.

## Approach / Thoughts
Use a dict to store the players as keys. If they are in match[0], do nothing if they are in match[-1] increase by 1. Then go through values and add to respective arrays.

## Solution
```python
class Solution:
    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:
        losses = collections.defaultdict(int)
        for match in matches:
            losses[match[0]] += 0
            losses[match[-1]] += 1

        zero, one = [], []
        for key, val in losses.items():
            if val == 0:
                zero.append(key)
            if val == 1:
                one.append(key)
        zero.sort()
        one.sort()
        return [zero, one]
```
