---
date: 2026-03-09
difficulty: Medium
num: 1654
related_topics:
  - Staff
  - Array
  - Hash Table
  - BFS
return:
---

# Problem:  

## Description
A certain bug's home is on the x-axis at position `x`. Help them get there from position `0`.

The bug jumps according to the following rules:

- It can jump exactly `a` positions **forward** (to the right).
- It can jump exactly `b` positions **backward** (to the left).
- It cannot jump backward twice in a row.
- It cannot jump to any `forbidden` positions.

The bug may jump forward **beyond** its home, but it **cannot jump** to positions numbered with **negative** integers.

Given an array of integers `forbidden`, where `forbidden[i]` means that the bug cannot jump to the position `forbidden[i]`, and integers `a`, `b`, and `x`, return _the minimum number of jumps needed for the bug to reach its home_. If there is no possible sequence of jumps that lands the bug on position `x`, return `-1.`

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
heap on distance 
note that you only visit each position once - if already seen, skip
also bounds for how far right you can go

## Solution
```python
class Solution:
    def minimumJumps(self, forbidden: List[int], a: int, b: int, x: int) -> int:
        forbid = set(forbidden)

        pq = [[-x, 0, 0, False]]
        while pq:
            dist, jumps, pos, is_back = heapq.heappop(pq)
            dist *= -1

            if pos > x + (2*a*b):
                continue

            if pos == x:
                return jumps

            if pos+a not in forbid:
                heapq.heappush(pq, (-(x-(pos+a)), jumps+1, pos+a, False))
                forbid.add(pos+a)

            if (pos-b not in forbid) and (pos-b >= 0) and (not is_back):
                heapq.heappush(pq, (-(x-(pos-b)), jumps+1, pos-b, True))
                forbid.add(pos-b)
        return -1