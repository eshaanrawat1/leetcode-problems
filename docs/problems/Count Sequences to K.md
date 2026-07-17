---
date: 2026-03-03
difficulty: Hard
num: 3850
related_topics:
  - Senior Staff
  - Array
  - Math
  - Dynamic Programming
  - Memoization
  - Number Theory
return:
---

# Problem:  

## Description
You are given an integer array `nums`, and an integer `k`.

Start with an initial value `val = 1` and process `nums` from left to right. At each index `i`, you must choose **exactly one** of the following actions:

- Multiply `val` by `nums[i]`.
- Divide `val` by `nums[i]`.
- Leave `val` unchanged.

After processing all elements, `val` is considered **equal** to `k` only if its final rational value **exactly** equals `k`.

Return the count of **distinct** sequences of choices that result in `val == k`.

**Note:** Division is rational (exact), not integer division. For example, `2 / 4 = 1 / 2`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
dp take skip
use math is close for rational equality, ie 5 / 3 * 3 = 5 (but is 5.0004 something in Python)

## Solution
```python
class Solution:
	def countSequences(self, nums: List[int], k: int) -> int:
		n = len(nums)
	
		@lru_cache(None)
		def dfs(i, cur):
			if i >= n:
				return math.isclose(cur, k)
		
			a = dfs(i+1, cur*nums[i])
			b = dfs(i+1, cur/nums[i])
			c = dfs(i+1, cur)
			return a+b+c
		return dfs(0, 1)