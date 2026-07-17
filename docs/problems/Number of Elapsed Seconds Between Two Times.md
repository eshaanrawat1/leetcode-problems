---
date: "2026-07-12"
difficulty: "Easy"
rating: 800
num: "3986"
related_topics:
  - "math"
return:
---

# Problem: 3986. Number of Elapsed Seconds Between Two Times

## Approach / Thoughts

[[Weekly Contest 510]]

split into parts handle remainder / borrow

## Solution

```python
class Solution:
    def secondsBetweenTimes(self, startTime: str, endTime: str) -> int:
        t1 = list(map(int, startTime.split(':')))
        t2 = list(map(int, endTime.split(':')))
        res = 0

        if t2[2] < t1[2]:
            t2[2] += 60
            t2[1] -= 1
        res += t2[2] - t1[2]

        if t2[1] < t1[1]:
            t2[1] += 60
            t2[0] -= 1
        res += 60 * (t2[1] - t1[1])

        res += 3600 * (t2[0] - t1[0])
        return res
```
