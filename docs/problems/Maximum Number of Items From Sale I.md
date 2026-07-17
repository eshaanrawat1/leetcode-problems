---
date: 2026-06-02
difficulty: Medium
num: 3946
related_topics:
  - 
return:
---

# Problem: 3946. Maximum Number of Items From Sale I

## Description
You are given a 2D integer array `items`, where `items[i] = [factori, pricei]` represents the `ith` item. You are also given an integer `budget`.

There are unlimited copies of each item available for purchase.You may buy any number of copies of any items such that the total cost of the purchased copies is at most `budget`.

After buying items, you may receive free copies according to the following rules:

	For each item `i` that you bought **at least one copy** of, you receive **one free copy** of every item `j` such that `j != i` and `factori` divides `factorj`.

	Buying multiple copies of the same item `i` does **not** give additional free copies through item `i`.

	The same item `j` can be received multiple times for free if it is received from purchases of different item types.

Return the **maximum total number of item copies** you can obtain, including both purchased copies and free copies, while spending at most `budget` on purchased items.

## Approach / Thoughts
[[Weekly Contest 504]]

knapsack dp 
split into deals + no deals
dp over deals, then take min of all no deals

## Solution
```python
class Solution:
    def maximumSaleItems(self, items: List[List[int]], budget: int):
        factors = Counter(x[0] for x in items)
        idx = Counter()

        for i, (f, _) in enumerate(items):
            for f2 in factors:
                if f2 % f == 0:
                    idx[i] += factors[f2]
            idx[i] -= 1
    
        A = []
        m = inf
        for i, (f, p) in enumerate(items):
            if idx[i]:
                A.append((p, idx[i]))
            m = min(m, p)

        n = len(A)
        dp = [[-1] * (budget+1) for _ in range(n)]

        def dfs(i, rem):
            if rem == 0:
                return 0

            if i >= n:
                return rem // m

            if dp[i][rem] != -1:
                return dp[i][rem]

            res = dfs(i+1, rem)
            p, c = A[i]
            
            if rem >= p:
                res = max(res, 1 + c + dfs(i+1, rem-p))
            dp[i][rem] = res
            return res

        return dfs(0, budget)
```