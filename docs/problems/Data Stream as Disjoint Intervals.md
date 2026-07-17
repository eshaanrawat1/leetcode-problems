---
date: 2026-04-28
difficulty: Hard
num: 352
related_topics:
  - Hash Table
  - Binary Search
  - Union Find
  - Design
  - Data Stream
  - Ordered Set
return:
---

# Problem:  

## Description
Given a data stream input of non-negative integers `a1, a2, ..., an`, summarize the numbers seen so far as a list of disjoint intervals.

Implement the `SummaryRanges` class:

- `SummaryRanges()` Initializes the object with an empty stream.
- `void addNum(int value)` Adds the integer `value` to the stream.
- `int[][] getIntervals()` Returns a summary of the integers in the stream currently as a list of disjoint intervals `[starti, endi]`. The answer should be sorted by `starti`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
sorted list, construct intervals by runs

## Solution
```python
from sortedcontainers import SortedSet

class SummaryRanges:

    def __init__(self):
        self.sl = SortedSet()
        

    def addNum(self, value: int) -> None:
        self.sl.add(value)


    def getIntervals(self) -> List[List[int]]:
        res = []
        seen = set()
        for v in self.sl:
            if v in seen:
                continue

            end, cur = v, v+1
            seen.add(v)

            while cur in self.sl:
                end = cur
                cur += 1
                
                seen.add(end)
            res.append([v, end])
        return res


# Your SummaryRanges object will be instantiated and called as such:
# obj = SummaryRanges()
# obj.addNum(value)
# param_2 = obj.getIntervals()