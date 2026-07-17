---
date: 2026-06-02
difficulty: Hard
num: 3948
related_topics:
  - 
return:
---

# Problem: 3948. Lexicographically Maximum MEX Array

## Description
You are given an integer array `nums`.

You want to construct an array `result` by repeatedly performing the following operation until `nums` becomes empty:

	Choose an integer `k` such that `1 
**Input:** nums = [0,1,0]

**Output:** [2,1]

**Explanation:**

	Take the first `k = 2` elements `[0, 1]` which has MEX = 2. Current `result = [2]`.

	Remaining array `[0]` has MEX = 1. Thus, the final `result = [2, 1]`.

## Approach / Thoughts
[[Weekly Contest 504]]

mex is the first missing number >= 0 
lexicographic order is nonincreasing - the mex after the first segment can never get better (otherwise it would be the new first segment)

precompute the mex we need in suffix (for `nums[i:]`) - this gives us an easy way to pick up mexes when we need

the idea is we identify the best mex (to start for lex biggest) - then we keep going until we find all the numbers needed (use the need set, discard for safe removals). when we find all the numbers, immediately break - since it won't get better, we can use the rest of the numbers for a longer string - pick up with suffix mex

special case for 0 - if the suffix mex is 0 say for numbers like the array `[2,3,4,5]` - then the best possible mex chain is `[0,0,0,0]` - 0 is the best mex, and we want the longest string 

## Solution
```python
class Solution:
    def maximumMEX(self, nums: List[int]) -> List[int]:
        n = len(nums)

        suffix_mex = [-1] * n

        mex = 0
        seen = set()
        for i in range(n-1, -1, -1):
            seen.add(nums[i])
            while mex in seen:
                mex += 1
            suffix_mex[i] = mex

        
        res = []
        mex = max(suffix_mex)
        i = 0

        while i < n:

            if mex == 0:
                res.append(0)
                i += 1
                continue

            need = set(list(range(mex)))

            while need:
                need.discard(nums[i])
                i += 1

            res.append(mex)
            mex = suffix_mex[i] if i < n else inf
        return res
```