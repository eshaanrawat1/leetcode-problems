---
date: 2026-06-21
difficulty: Medium
num: 1833
related_topics:
  - Array
  - Greedy
  - Sorting
  - Counting Sort
return:
---

# Problem: 1833. Maximum Ice Cream Bars

## Description
It is a sweltering summer day, and a boy wants to buy some ice cream bars.

At the store, there are `n` ice cream bars. You are given an array `costs` of length `n`, where `costs[i]` is the price of the `ith` ice cream bar in coins. The boy initially has `coins` coins to spend, and he wants to buy as many ice cream bars as possible. 

**Note:** The boy can buy the ice cream bars in any order.

Return *the **maximum** number of ice cream bars the boy can buy with *`coins`* coins.*

You must solve the problem by counting sort.

## Approach / Thoughts
frequency of each coin, greedy take minimum cost ice cream bar

## Solution
```python
class Solution:
    def maxIceCream(self, costs: List[int], coins: int) -> int:
        cnt = Counter(costs)
        res = 0

        for c in sorted(cnt):
            if coins <= 0:
                break
            i = min(coins // c, cnt[c])
            res += i
            coins -= i * c
        return res
```