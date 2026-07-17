---
date: 2026-05-17
difficulty: Hard
num: 1345
related_topics:
  - Array
  - Hash Table
  - Breadth-First Search
return:
---

# Problem: 1345. Jump Game IV

## Description
Given an array of integers `arr`, you are initially positioned at the first index of the array.

In one step you can jump from index `i` to index:

	`i + 1` where: `i + 1 = 0`.

	`j` where: `arr[i] == arr[j]` and `i != j`.

Return *the minimum number of steps* to reach the **last index** of the array.

Notice that you can not jump outside of the array at any time.

## Approach / Thoughts
bfs + dict for groups 
remove from groups 

## Solution
```python
class Solution:
    def minJumps(self, arr: List[int]) -> int:
        n = len(arr)

        adj = defaultdict(list)
        for i, x in enumerate(arr):
            adj[x].append(i)

        q = deque([[0, 0]])
        vis = {0}

        while q:
            i, steps = q.popleft()

            if i == n-1:
                return steps

            if i+1 not in vis and i+1 < n:
                vis.add(i+1)
                q.append((i+1, steps+1))

            if i-1 not in vis and i-1 >= 0:
                vis.add(i-1)
                q.append((i-1, steps+1))

            while adj[arr[i]]:
                j = adj[arr[i]].pop()
                if j not in vis:
                    q.append((j, steps+1))
                    vis.add(j)
        return -1
```