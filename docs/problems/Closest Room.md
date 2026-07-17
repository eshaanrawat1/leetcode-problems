---
date: 2026-04-25
difficulty: Hard
num: 1847
related_topics:
  - Array
  - Binary Search
  - Sorting
  - Ordered Set
return:
---

# Problem:  

## Description
There is a hotel with `n` rooms. The rooms are represented by a 2D integer array `rooms` where `rooms[i] = [roomIdi, sizei]` denotes that there is a room with room number `roomIdi` and size equal to `sizei`. Each `roomIdi` is guaranteed to be **unique**.

You are also given `k` queries in a 2D array `queries` where `queries[j] = [preferredj, minSizej]`. The answer to the `jth` query is the room number `id` of a room such that:

- The room has a size of **at least** `minSizej`, and
- `abs(id - preferredj)` is **minimized**, where `abs(x)` is the absolute value of `x`.

If there is a **tie** in the absolute difference, then use the room with the **smallest** such `id`. If there is **no such room**, the answer is `-1`.

Return _an array_ `answer` _of length_ `k` _where_ `answer[j]` _contains the answer to the_ `jth` _query_.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
sort rooms and queries - accumulate valid room ids as we go
binary search on closest match - store in sorted set for stream

## Solution
```python
from sortedcontainers import SortedSet

class Solution:
    def closestRoom(self, rooms: List[List[int]], queries: List[List[int]]):
        rooms.sort(key=lambda x: -x[1])

        query_idx = [[q[0], q[1], i] for i,q in enumerate(queries)]
        query_idx.sort(key=lambda x: -x[1])

        n = len(rooms)
        m = len(query_idx)

        ss = SortedSet()
        res = [-1] * m
        i = 0


        def choose(val_id):
            r = bisect_left(ss, val_id)
            l = r-1 if r > 0 else None

            if l is None:
                return ss[r]
                
            if r >= len(ss) or abs(ss[l] - val_id) <= abs(ss[r] - val_id):
                return ss[l]
            return ss[r]


        for prefid, qsz, idx in query_idx:

            while i < n and qsz <= rooms[i][1]:
                ss.add(rooms[i][0])
                i += 1

            if not ss:
                continue
            res[idx] = choose(prefid)
        return res

