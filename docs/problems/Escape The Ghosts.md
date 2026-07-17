---
date: 2026-05-05
difficulty: Medium
num: 799
related_topics:
  - Array
  - Math
return:
---

# Problem:  

## Description
You are playing a simplified PAC-MAN game on an infinite 2-D grid. You start at the point `[0, 0]`, and you are given a destination point `target = [xtarget, ytarget]` that you are trying to get to. There are several ghosts on the map with their starting positions given as a 2D array `ghosts`, where `ghosts[i] = [xi, yi]` represents the starting position of the `ith` ghost. All inputs are **integral coordinates**.

Each turn, you and all the ghosts may independently choose to either **move 1 unit** in any of the four cardinal directions: north, east, south, or west, or **stay still**. All actions happen **simultaneously**.

You escape if and only if you can reach the target **before** any ghost reaches you. If you reach any square (including the target) at the **same time** as a ghost, it **does not** count as an escape.

Return `true` _if it is possible to escape regardless of how the ghosts move, otherwise return_ `false`_._

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Weekly Contest 73]]

check if ghost min dist <= your min dist to target

## Solution
```python
class Solution:
    def escapeGhosts(self, ghosts: List[List[int]], target: List[int]):

        xt, yt = target
        
        def dist(x1, y1, x2, y2):
            return abs(x2-x1) + abs(y2-y1)

        min_dist = inf
        for x1, y1 in ghosts:
            min_dist = min(min_dist, dist(x1, y1, xt, yt))

        my_dist = dist(0, 0, xt, yt)
        return my_dist < min_dist