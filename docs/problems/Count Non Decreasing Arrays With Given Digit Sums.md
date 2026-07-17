---
date: 2026-04-16
difficulty: Hard
num: 3883
related_topics:
  - Array
  - Dynamic Programming
  - Prefix Sum
return: Review
---

# Problem:  

## Description
<!-- Paste the LeetCode problem description here -->

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
take skip numbers 
pass tle with go

## Solution
```go
func countArrays(digitSum []int) int {
    mod := 1000000007
    n := len(digitSum)

    var calc_sum func(int) int
    calc_sum = func(x int) int {
        ans := 0
        for x > 0 {
            ans += x % 10
            x /= 10
        }
        return ans
    }

    vals := make([]int, 5001)
    for i := 0; i < 5001; i++ {
        vals[i] = calc_sum(i)
    }

    dp := make([][]int, n+1)
    for i := range dp {
        dp[i] = make([]int, 5001)
        for j := range dp[i] {
            dp[i][j] = -1
        }
    }

    var dfs func(i, v int) int
	dfs = func(i, v int) int {
		if i >= n {return 1}
		if v > 5000 {return 0}

		if dp[i][v] != -1 {return dp[i][v]}

		res := 0
		if vals[v] == digitSum[i] {
			res = (res + dfs(i+1, v)) % mod
		}

		res = (res + dfs(i, v+1)) % mod

		dp[i][v] = res
		return res
	}
	return dfs(0, 0)
}