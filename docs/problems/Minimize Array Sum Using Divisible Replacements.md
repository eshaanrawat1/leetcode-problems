---
date: 2026-05-11
difficulty: Medium
num: 3927
related_topics:
  - 
return:
---

# Problem: 3927. Minimize Array Sum Using Divisible Replacements

## Description
You are given an integer array `nums`.

You can perform the following operation any number of times:

	Choose two indices `a` and `b` such that `nums[a] % nums[b] == 0`.

	Replace `nums[a]` with `nums[b]`.

Return the **minimum** possible sum of the array after performing any number of operations.

## Approach / Thoughts
[[Weekly Contest 501]]

find min factor for each number + sort

## Solution
```python
class Solution:
    def minArraySum(self, nums: list[int]) -> int:
        seen = defaultdict(list)
        num_set = set(nums)

        for i, n in enumerate(nums):

            for f in range(1, int(sqrt(n))+1):
                if n % f == 0:
                    if f in num_set:
                        seen[f].append((i, n))
                    if n//f in num_set:
                        seen[n//f].append((i, n))

        modified = set()
        
        for k in sorted(seen.keys()):
            for i, v in seen[k]:
                if i in modified:
                    continue

                nums[i] = k
                modified.add(i)
        return sum(nums)
```