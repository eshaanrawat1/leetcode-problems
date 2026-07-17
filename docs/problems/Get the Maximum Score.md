---
date: 2024-12-02
difficulty: Hard
num: 1537
related_topics:
  - Array
  - Dynamic Programming
  - Greedy
  - Two-Pointer
return: Done
---

# Problem: 1537. Get The Maximum Score

## Description
same, can jump between arrays with same values

## Approach / Thoughts
dp + binary search

## Solution
```python
class Solution:
    def maxSum(self, nums1: List[int], nums2: List[int]) -> int:
        m, n = len(nums1), len(nums2)

        def binary_search(arr, target):
            l, r = 0, len(arr) - 1
            while l <= r:
                mid = (l + r) // 2
                if arr[mid] == target:
                    return mid
                elif arr[mid] > target:
                    r = mid - 1
                else:
                    l = mid + 1
            return -1
                

        dp = [[-1] * max(m, n) for _ in range(2)]

        def dfs(idx, top):
            if top == 0 and idx >= m:
                return 0
            if top == 1 and idx >= n:
                return 0

            if dp[top][idx] != -1:
                return dp[top][idx]

            arr = nums1 if top == 0 else nums2
            comp = nums1 if top == 1 else nums2

            stay = arr[idx] + dfs(idx + 1, top)
            move = -inf

            # move if possible
            comp_idx = binary_search(comp, arr[idx])
            if comp_idx != -1:
                move = arr[idx] + dfs(comp_idx + 1, abs(1 - top))
            
            dp[top][idx] = max(stay, move)
            return max(stay, move)

        return max(dfs(0, True), dfs(0, False)) % (10 ** 9 + 7)
```
