---
date: 2026-06-02
difficulty: Medium
num: 3635
related_topics:
  - Array
  - Two Pointers
  - Binary Search
  - Greedy
  - Sorting
return:
---

# Problem: 3635. Earliest Finish Time for Land and Water Rides II

## Description
You are given two categories of theme park attractions: **land rides** and **water rides**.

	**Land rides**

	
		`landStartTime[i]` – the earliest time the `ith` land ride can be boarded.

		`landDuration[i]` – how long the `ith` land ride lasts.

	

	
	**Water rides**
	
		`waterStartTime[j]` – the earliest time the `jth` water ride can be boarded.

		`waterDuration[j]` – how long the `jth` water ride lasts.

	

	

A tourist must experience **exactly one** ride from **each** category, in **either order**.

	A ride may be started at its opening time or **any later moment**.

	If a ride is started at time `t`, it finishes at time `t + duration`.

	Immediately after finishing one ride the tourist may board the other (if it is already open) or wait until it opens.

Return the **earliest possible time** at which the tourist can finish both rides.

## Approach / Thoughts
consider land before water or vice versa
track the minimum possible time we finish the first event (since independent)
then the time for the second event is either
- wait for second event (s+d)
- or wait until first event finishes (f1+d)

try both orders

## Solution
```python
class Solution:
    def earliestFinishTime(self, ls, ld, ws, wd) -> int:

        def f(A1, A2, B1, B2):
            f1 = inf 
            for s, d in zip(A1, A2):
                f1 = min(f1, s+d)

            f2 = inf
            for s, d in zip(B1, B2):
                f2 = min(f2, max(f1, s) + d)
            return f2

        return min(
            f(ls, ld, ws, wd),
            f(ws, wd, ls, ld)
        )
```