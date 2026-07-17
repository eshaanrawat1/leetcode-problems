---
date: 2026-04-20
difficulty: Medium
num: 2078
related_topics:
  - Array
  - String
return:
---

# Problem:  

## Description
There are `n` houses evenly lined up on the street, and each house is beautifully painted. You are given a **0-indexed** integer array `colors` of length `n`, where `colors[i]` represents the color of the `ith` house.

Return _the **maximum** distance between **two** houses with **different** colors_.

The distance between the `ith` and `jth` houses is `abs(i - j)`, where `abs(x)` is the **absolute value** of `x`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
store first colors

## Solution
```python
class Solution:
    def maxDistance(self, colors: List[int]) -> int:
        dist = {}

        res = 0
        for i,c in enumerate(colors):
            for c2 in dist:
                if c != c2:
                    res = max(res, i - dist[c2])
            
            if c not in dist:
                dist[c] = i
        return res