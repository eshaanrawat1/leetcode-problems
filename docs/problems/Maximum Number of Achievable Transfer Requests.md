---
date: 2026-03-07
difficulty: Hard
num: 1601
related_topics:
  - Senior Staff
  - Array
  - Backtracking
  - Bit Manipulation
  - Enumeration
return:
---

# Problem:  

## Description
We have `n` buildings numbered from `0` to `n - 1`. Each building has a number of employees. It's transfer season, and some employees want to change the building they reside in.

You are given an array `requests` where `requests[i] = [fromi, toi]` represents an employee's request to transfer from building `fromi` to building `toi`.

**All buildings are full**, so a list of requests is achievable only if for each building, the **net change in employee transfers is zero**. This means the number of employees **leaving** is **equal** to the number of employees **moving in**. For example if `n = 3` and two employees are leaving building `0`, one is leaving building `1`, and one is leaving building `2`, there should be two employees moving to building `0`, one employee moving to building `1`, and one employee moving to building `2`.

Return _the maximum number of achievable requests_.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
take skip dp with bitmask 

## Solution
```python
class Solution:
    def maximumRequests(self, n: int, requests: List[List[int]]) -> int:
        m = len(requests)

        def check(mask):
            res = [0] * n
            for i in range(m):
                if (1 << i) & mask:
                    src, dst = requests[i]
                    res[src] -= 1
                    res[dst] += 1
            return not any(res)

        @lru_cache(None)
        def dfs(i, mask):
            if i >= m:
                return 0 if check(mask) else -inf

            take = 1 + dfs(i+1, mask | (1 << i))
            skip = dfs(i+1, mask)
            return max(take, skip)
        return dfs(0, 0)