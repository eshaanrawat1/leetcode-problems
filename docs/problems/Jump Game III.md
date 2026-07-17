---
date: 2026-05-17
difficulty: Medium
num: 1306
related_topics:
  - Array
  - Depth-First Search
  - Breadth-First Search
return:
---

# Problem: 1306. Jump Game III

## Description
Given an array of non-negative integers `arr`, you are initially positioned at `start` index of the array. When you are at index `i`, you can jump to `i + arr[i]` or `i - arr[i]`, check if you can reach **any** index with value 0.

Notice that you can not jump outside of the array at any time.

## Approach / Thoughts
bfs

## Solution
```python
class Solution:
    def canReach(self, arr: List[int], start: int) -> bool:
        n = len(arr)

        q = deque([start])
        vis = {start}

        while q:
            i = q.popleft()
            if arr[i] == 0:
                return True 

            for j in [i + arr[i], i - arr[i]]:
                if 0 <= j < n and j not in vis:
                    vis.add(j)
                    q.append(j)
        return False
```