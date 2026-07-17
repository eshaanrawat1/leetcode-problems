---
date: 2026-05-18
difficulty: Hard
num: 3229
related_topics:
  - Array
  - Dynamic Programming
  - Stack
  - Greedy
  - Monotonic Stack
return:
---

# Problem: 3229. Minimum Operations to Make Array Equal to Target

## Description
You are given two positive integer arrays `nums` and `target`, of the same length.

In a single operation, you can select any subarray of `nums` and increment each element within that subarray by 1 or decrement each element within that subarray by 1.

Return the **minimum** number of operations required to make `nums` equal to the array `target`.

## Approach / Thoughts
same ideas as [[Minimum Number of Increments on Subarrays to Form a Target Array]] 
lay brick walls but in groups of positive and negative

## Solution
```python
class Solution:
    def minimumOperations(self, nums: List[int], target: List[int]):
        
        n = len(nums)
        diff = []

        for x, y in zip(nums, target):
            diff.append(y-x)

        def calc(arr):
            print(arr)
            ps = [arr[0]]
            for i in range(1, len(arr)):
                ps.append(max(0, arr[i] - arr[i-1]))
            return sum(ps)

        q = deque(diff)

        res = 0
        cur = []
        parity = None

        while q:
            p = 1 if q[0] >= 0 else -1
            if parity is None or parity == p:
                cur.append(abs(q.popleft()))
            else:
                res += calc(cur)
                cur = [abs(q.popleft())]
            parity = p
        return res + calc(cur)
```