---
date: 2026-04-07
difficulty: Hard
num: 3892
related_topics:
  - Array
  - Dynamic Programming
return:
---

# Problem:  

## Description
You are given a ​​​​​​​circular integer array​​​​​​​ `nums` of length `n`.

An index `i` is a **peak** if its value is **strictly greater** than its neighbors:

- The **previous** neighbor of `i` is `nums[i - 1]` if `i > 0`, otherwise `nums[n - 1]`.
- The **next** neighbor of `i` is `nums[i + 1]` if `i < n - 1`, otherwise `nums[0]`.

You are allowed to perform the following operation **any** number of times:

- Choose any index `i` and **increase** `nums[i]` by 1.

Return an integer denoting the **minimum** number of operations required to make the array contain **at least** `k` peaks. If it is impossible, return -1.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
dp take skip 
dp i peaks = min cost for index i with peak peaks

## Solution
```go
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func minOperations(nums []int, k int) int {
	n := len(nums)
	maxPeaks := (n + 1) / 2
	if k > maxPeaks {
		return -1
	}

	costs := make([]int, n)
	for i := 0; i < n; i++ {
		l := nums[(i-1+n)%n]
		r := nums[(i+1)%n]
		costs[i] = max(0, max(l, r)+1-nums[i])
	}

	var solve func(start, end, peakCnt int) int
	solve = func(start, end, peakCnt int) int {
		dp := make([][]int, n)
		for i := 0; i < n; i++ {
			dp[i] = make([]int, maxPeaks)
			for j := 0; j < maxPeaks; j++ {
				dp[i][j] = -1
			}
		}

		var dfs func(i, peaks int) int
		dfs = func(i, peaks int) int {
			if peaks == k {return 0}
			if i > end {return math.MaxInt32}
			if dp[i][peaks] != -1 {return dp[i][peaks]}

			take := costs[i] + dfs(i+2, peaks+1)
			skip := dfs(i+1, peaks)
			dp[i][peaks] = min(take, skip)
			return dp[i][peaks]
		}

		return dfs(start, peakCnt)
	}

	take0 := costs[0] + solve(2, n-2, 1)
	skip0 := solve(1, n-1, 0)
	res := min(take0, skip0)
	if res >= math.MaxInt32 {
		return -1
	}
	return res
}