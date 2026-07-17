---
date: 2026-06-02
difficulty: Medium
num: 3947
related_topics:
  - 
return:
---

# Problem: 3947. Maximum Number of Items From Sale II

## Description
You are given a 2D integer array `items`, where `items[i] = [factori, pricei]` represents the `ith` item. You are also given an integer `budget`.

There are unlimited copies of each item available for purchase. You may buy any number of copies of any items such that the total cost of the purchased copies is at most `budget`.

After buying items, you may receive free copies according to the following rules:

	Each purchased copy of item `i` can give you **at most one** free copy of another item `j`.

	The free item must satisfy `i != j` and `factori` divides `factorj`.

	For each ordered pair `(i, j)`, you can receive a free copy of item `j` from purchases of item `i` **at most once**, regardless of how many copies of item `i` you buy.

	The same item `j` can be received multiple times for free if it is received from purchases of different item types.

Return the **maximum total number of item copies** you can obtain, including both purchased copies and free copies, while spending at most `budget` on purchased items.

## Approach / Thoughts
[[Weekly Contest 504]]

first find all factor count - ie index 0 is factor of 3 other indices 
better to take deals if possible, also check min budget

deals mean we get 2 items for price of 1 (up to max count of pairs)
- so if an item costs 9 the efficiency is 4.5 / items
- however if the cost of the deal (efficiency) is less than just spam buying the min item, just take the min item instead

## Solution
```python
class Solution:
    def maximumSaleItems(self, items: List[List[int]], budget: int):
        
        factors = {i[0] : -1 for i in items}

        for f, p in items:  
            for j in range(1, int(sqrt(f))+1):
                if f % j == 0:
                    f1 = j
                    f2 = f // j

                    if f1 != f2:
                        if f1 in factors:
                            factors[f1] += 1
                        if f2 in factors:
                            factors[f2] += 1
                    else:
                        if f1 in factors:
                            factors[f1] += 1

        deals = []
        m = inf
        res = 0
        
        for i, (f, p) in enumerate(items):
            if factors[f]:
                deals.append((p / 2, p, factors[f]))
            m = min(m, p)

        deals.sort()
        q = deque(deals)

        while q:
            e, p, cnt = q.popleft()
            if budget < p or e >= m:
                break

            d = min(cnt, budget // p)
            res += 2*d
            budget -= p*d

        return res + budget // m
```