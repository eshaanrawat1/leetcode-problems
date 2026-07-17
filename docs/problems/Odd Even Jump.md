---
date: 2026-07-13
difficulty: Hard
num: 975
related_topics:
  - Array
  - Dynamic Programming
  - Stack
  - Sorting
  - Monotonic Stack
  - Ordered Set
return:
---

# Problem: 975. Odd Even Jump

## Description
You are given an integer array `arr`. From some starting index, you can make a series of jumps. The (1st, 3rd, 5th, ...) jumps in the series are called **odd-numbered jumps**, and the (2nd, 4th, 6th, ...) jumps in the series are called **even-numbered jumps**. Note that the **jumps** are numbered, not the indices.

You may jump forward from index `i` to index `j` (with `i = arr[j]` and `arr[j]` is the largest possible value. If there are multiple such indices `j`, you can only jump to the **smallest** such index `j`.

	- It may be the case that for some index `i`, there are no legal jumps.

A starting index is **good** if, starting from that index, you can reach the end of the array (index `arr.length - 1`) by jumping some number of times (possibly 0 or more than once).

Return *the number of **good** starting indices*.

## Approach / Thoughts
use sorted list to figure out candidates for odd and even jumps - store both index and value - for even jumps store negative index to get the smallest possible one - then dfs for jumps keeping track of parity -> cache will handle loop for how many valid candidates there are 

could have used mono stack

## Solution
```python
from sortedcontainers import SortedList

class Solution:
    def oddEvenJumps(self, arr: List[int]) -> int:
        # 28:47

        n = len(arr)

        larger = [-1] * n
        smaller = [-1] * n

        ss = SortedList()
        for i in range(n-1, -1, -1):
            ss.add((arr[i], i))
            j = ss.index((arr[i], i))
            
            if j != len(ss)-1:
                larger[i] = ss[j+1][1]

        ss = SortedList()
        for i in range(n-1, -1, -1):
            ss.add((arr[i], -i))
            j = ss.index((arr[i], -i))
            
            if j != 0:
                smaller[i] = -ss[j-1][1]


        @lru_cache(None)
        def dfs(i, sign):
            if i == n-1:
                return 1

            j = larger[i] if sign & 1 else smaller[i]
            if j == -1:
                return 0

            return dfs(j, sign ^ 1)


        res = 0
        for i in range(n):
            res += (dfs(i, 1) > 0)
        return res
```