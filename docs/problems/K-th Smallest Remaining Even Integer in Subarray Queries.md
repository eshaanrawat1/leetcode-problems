---
date: 2026-04-27
difficulty: Hard
num: 3911
related_topics:
  - Array
  - Binary Search
  - Prefix Sum
return:
---

# Problem:  

## Description
You are given an integer array `nums` where `nums` is **strictly increasing**.

You are also given a 2D integer array `queries`, where `queries[i] = [li, ri, ki]`.

For each query `[li, ri, ki]`:

- Consider the **subarray** `nums[li..ri]`
- From the **infinite** sequence of all **positive even integers**: `2, 4, 6, 8, 10, 12, 14, ...`
- **Remove** all elements that appear in the **subarray** `nums[li..ri]`.
- Find the `kith` **smallest integer** remaining in the sequence after the removals.

Return an integer array `ans`, where `ans[i]` is the result for the `ith` query.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Biweekly Contest 181]]

bs on answer
check number of evens leq, number of places to skip in sequence
handle case of 2 valid cands, pick lower one

## Solution
```python
class Solution:
    def kthRemainingInteger(self, nums: list[int], queries: list[list[int]]):
        # 1:17:00
        # needed help on 2*lo, if cand is valid
        # can still move left to find more valid
        
        ps = []
        for i, x in enumerate(nums):
            val = 0 if i == 0 else ps[-1]
            ps.append((x % 2 == 0) + val)


        def bs(l, r, k):
            lo, hi = 1, 2*10**9+2
            ans = 2*k

            while lo <= hi:
                mid = (lo + hi) // 2
                mid_val = 2 * mid 

                j = bisect_right(nums, mid_val)-1
                j = min(j, r)
   
                num_evens = ps[j] if j >= l else 0
                if l > 0 and l <= j:
                    num_evens -= ps[l-1]

                mid_val -= 2 * num_evens
                if mid_val >= ans:
                    hi = mid - 1
                else:
                    lo = mid + 1
            return 2*lo

        return [bs(l, r, k) for l, r, k in queries]
