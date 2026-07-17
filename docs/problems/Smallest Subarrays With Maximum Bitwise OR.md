---
date: 2025-07-28
difficulty: Medium
num: 2411
related_topics:
  - Array
  - Binary Search
  - Bit Manipulation
  - Sliding Window
return: Done
---

# Problem: 2411. Smallest Subarrays With Maximum Bitwise Or

## Description

## Approach / Thoughts
find binary search of last possible position and prefix sum of bit maps

## Solution
```python
class Solution:
    def smallestSubarrays(self, nums: List[int]) -> List[int]:
        n = len(nums)

        max_or = [0] * n
        max_or[-1] = nums[-1]
        for i in range(n-2, -1, -1):
            max_or[i] |= nums[i]
            max_or[i] |= max_or[i+1]

        resmap = [Counter() for _ in range(n)]
        bitmap = [Counter() for _ in range(n)]

        for i in range(n):
            for j in range(30):
                if (1 << j) & max_or[i]:
                    resmap[i][j] += 1
        
        
        for i in range(30):
            if (1 << i) & nums[0]:
                bitmap[0][i] += 1


        for i in range(1, n):
            bitmap[i] = bitmap[i-1].copy()
            for j in range(30):
                if (1 << j) & nums[i]:
                    bitmap[i][j] += 1

        def bs(i):
            if nums[i] == max_or[i]:
                return i

            curmap = bitmap[i-1] if i != 0 else Counter()
            l, r = i, n-1
            pos = n-1

            while l <= r:
                m = (l + r) // 2
                nxtmap = bitmap[m]         

                flag = False
                for j in range(30):
                    if nxtmap[j] - curmap[j] < resmap[i][j]:
                        flag = True
                        break

                if flag:
                    l = m + 1
                else:
                    pos = m
                    r = m - 1

            return pos

        res = [0] * n
        for i in range(n):
            res[i] = bs(i) - i + 1
        return res
```
