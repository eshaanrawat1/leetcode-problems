---
date: 2026-05-12
difficulty: Medium
num: 3923
related_topics:
  - 
return:
---

# Problem: 3923. Minimum Generations to Target Point

## Description
You are given a 2D integer array `points` where `points[i] = [xi, yi, zi]` represents a point in 3D space, and an integer array `target` representing a target point.

Define **generation** 0 as the initial list of points. For each integer `k >= 1`, form generation `k` as follows:

	Consider every pair of two **distinct** points `a = [x1, y1, z1]` and `b = [x2, y2, z2]` taken from all points produced in generations 0 through `k - 1`.

	For each such pair, compute `c = [floor((x1 + x2) / 2), floor((y1 + y2) / 2), floor((z1 + z2) / 2)]` and collect every such `c` into a generation `k`.

	All points in the generation `k` are produced **simultaneously** from points in generations 0 through​​​​​​​ `k - 1`.

	After generation `k` is formed, the points in the generation `k` are considered available for forming later generations.

Return the **smallest** integer `k` such that the `target` appears in one of the generations 0 through `k`. If the `target` is already in the initial points, return 0. If it is impossible to obtain the `target`, return -1.

Notes:

	**floor** denotes rounding **down** to the nearest integer.

	"Two **distinct** points" means the two chosen points must have **different** `(x, y, z)` coordinates. A point cannot be paired with itself, and pairing two points with **identical** coordinates is not possible.

## Approach / Thoughts
[[Biweekly Contest 182]]

brute force generate - stop when no change

## Solution
```python
from sortedcontainers import SortedSet

class Solution:
    def minGenerations(self, points: List[List[int]], target: List[int]):

        s = SortedSet([tuple(p) for p in points])
        t = tuple(target)
        gen = 0

        while True:
            if t in s:
                return gen

            gen += 1

            new_s = SortedSet(s)
            for i in range(len(s)):
                for j in range(i+1, len(s)):
                    new_s.add((
                        (s[i][0] + s[j][0]) // 2,
                        (s[i][1] + s[j][1]) // 2,
                        (s[i][2] + s[j][2]) // 2,
                    ))

            if new_s == s:
                return -1
            s = new_s
```