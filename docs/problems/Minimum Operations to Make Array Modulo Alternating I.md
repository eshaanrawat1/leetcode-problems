---
date: 2026-06-03
difficulty: Medium
num: 3937
related_topics:
  - 
return:
---

# Problem: 3937. Minimum Operations to Make Array Modulo Alternating I

## Description
You are given an integer array `nums` and an integer `k`.

In one operation, you can **increase** or **decrease** any element of `nums` by 1.

An array is called **modulo alternating** if there exist two **distinct** integers `x` and `y` (`0 
**Input:** nums = [1,4,2,8], k = 3

**Output:** 2

**Explanation:**

	Let's choose `x = 1` for even indices and `y = 2` for odd indices.

	Perform the following operations:
	
		Increment `nums[1] = 4` by 1, giving `nums = [1, 5, 2, 8]`.

		Decrement `nums[2] = 2` by 1, giving `nums = [1, 5, 1, 8]`.

	

	
	Now, for even indices, `nums[i] % k = 1`, and for odd indices, `nums[i] % k = 2`.

	Thus, the total number of operations required is 2.

## Approach / Thoughts
[[Biweekly Contest 183]]

brute force- in go since tle
optimized python checks x and y separately

## Solution
```python
func abs(x int) int {
	if x < 0 {
        return -x
    }
    return x
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func minOperations(nums []int, k int) int {
    lnums := make([]int, len(nums))
	rnums := make([]int, len(nums))

	for i, n := range nums {
		lnums[i] = n / k * k
		rnums[i] = ((n + k - 1) / k) * k
	}

	f := func(x, y int) int {
		cnt := 0

		for idx, n := range nums {
			l := lnums[idx]
			r := rnums[idx]

			if idx&1 == 1 {
				m := abs(n - (l + y))
				m = min(m, abs(n-(l-(k-y))))
				m = min(m, abs(n-(r+y)))
				m = min(m, abs(n-(r-(k-y))))
				cnt += m
			} else {
				m := abs(n - (l + x))
				m = min(m, abs(n-(l-(k-x))))
				m = min(m, abs(n-(r+x)))
				m = min(m, abs(n-(r-(k-x))))
				cnt += m
			}
		}
		return cnt
	}

	res := math.MaxInt
	for i := 0; i < k; i++ {
		for j := 0; j < k; j++ {
			if i == j {
				continue
			}
			res = min(res, f(i, j))
		}
	}
	return res
}
```

```python
class Solution:
    def minOperations(self, nums: list[int], k: int) -> int:
        lnums = [n // k * k for n in nums]
        rnums = [ceil(n / k) * k for n in nums]

        def f(x, p):
            cnt = 0
            for idx, n in enumerate(nums):
                l = lnums[idx]
                r = rnums[idx]
    
                if idx % 2 == p:
                    m = abs(n - (l+x))
                    m = min(m, abs(n - (l-(k-x))))
                    m = min(m, abs(n - (r+x)))
                    m = min(m, abs(n - (r-(k-x))))
                    cnt += m
            return cnt


        xc = [f(i, 0) for i in range(k)]
        yc = [f(i, 1) for i in range(k)]
        
        res = inf
        for i in range(k):
            for j in range(k):
                if i == j:
                    continue
                res = min(res, xc[i] + yc[j])
        return res
```