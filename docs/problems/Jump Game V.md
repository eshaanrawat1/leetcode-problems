---
date: 2026-05-25
difficulty: Hard
num: 1340
related_topics:
  - Array
  - Dynamic Programming
  - Sorting
return:
---

# Problem: 1340. Jump Game V

## Description
Given an array of integers `arr` and an integer `d`. In one step you can jump from index `i` to index:

	`i + x` where: `i + x = 0` and `0  arr[j]` and `arr[i] > arr[k]` for all indices `k` between `i` and `j` (More formally `min(i, j) 

```
Input: arr = [6,4,14,6,8,13,9,7,10,6,12], d = 2
Output: 4
Explanation: You can start at index 10. You can jump 10 --> 8 --> 6 --> 7 as shown.
Note that if you start at index 6 you can only jump to index 7. You cannot jump to index 5 because 13 > 9. You cannot jump to index 4 because index 5 is between index 4 and 6 and 13 > 9.
Similarly You cannot jump from index 3 to index 2 or index 1.
```

## Approach / Thoughts
dag for possible jumps + bfs
could memo with dfs

## Solution
```python
from sortedcontainers import SortedSet

class Solution:
    def maxJumps(self, arr: List[int], d: int) -> int:
        n = len(arr)
        jumps = defaultdict(list)

        for i, x in enumerate(arr):
            l, r = i-1, i+1

            s = SortedSet()
            while l >= 0 and i - l <= d and arr[l] < x:
                s.add((arr[l], -l))
                if s[-1] == ((arr[l]), -l):
                    jumps[i].append(l)
                l -= 1
            
            s = SortedSet()
            while r < n and r - i <= d and arr[r] < x:
                s.add((arr[r], r))
                if s[-1] == ((arr[r]), r):
                    jumps[i].append(r)
                r += 1

        
        def path(src):
            q = deque([[src, 1]])
            res = 1

            while q:
                cur, steps = q.popleft()
                res = max(res, steps)
                
                for nei in jumps[cur]:
                    q.append([nei, steps+1])
            return res

        return max(path(i) for i in range(n))
```