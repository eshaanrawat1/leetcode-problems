---
date: 2026-03-02
difficulty: Hard
num: 2376
related_topics:
  - Senior Staff
  - Math
  - Dynamic Programming
return:
---

# Problem:  

## Description
We call a positive integer **special** if all of its digits are **distinct**.

Given a **positive** integer `n`, return _the number of special integers that belong to the interval_ `[1, n]`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Digit DP]]
keep track of hi bounds for n
keep track of leading 0s for distinct + bitmask


## Solution
```python
class Solution:
	def countSpecialNumbers(self, n: int) -> int:
		s = str(n)
		m = len(s)
		HAVE = (1 << 10) - 1
	
		@lru_cache(None)
		def dfs(i, hi, lead, seen):
			if i >= m or seen == HAVE:
				return 1
	
			res = 0
			upper = int(s[i]) if hi else 9
			
			for j in range(upper+1):
				if (1 << j) & seen and j == 0 and lead:
					pass
				elif (1 << j) & seen:
					continue
			
				nhi = True if (j == upper and hi) else False
				nlead = True if (j == 0 and lead) else False
				nseen = seen if (j == 0 and lead) else seen | (1 << j)
				res += dfs(i+1, nhi, nlead, nseen)
			return res
			
		return dfs(0, True, True, 0) - 1