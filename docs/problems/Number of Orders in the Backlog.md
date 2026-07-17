---
date: 2025-12-04
difficulty: Medium
num: 1801
related_topics:
  - Array
  - Heap (Priority Queue)
  - Simulation
return: Done
---

# Problem: 1801. Number Of Orders In The Backlog

## Description
same, match orders

## Approach / Thoughts
heaps for buy and sell track amounts

## Solution
```python
class Solution:
    def getNumberOfBacklogOrders(self, orders: List[List[int]]) -> int:
        sell, buy = [], []
        for p, a, t in orders:
            if t == 0:
                heapq.heappush(buy, [-p, a])
            else:
                heapq.heappush(sell, [p, a])

            while buy and sell and -buy[0][0] >= sell[0][0]:
                price_buy, amt_buy = buy[0]
                price_sell, amt_sell = sell[0]

                diff = abs(amt_buy - amt_sell)
                if amt_buy > amt_sell:
                    buy[0][1] = diff
                    heapq.heappop(sell)
                elif amt_buy < amt_sell:
                    sell[0][1] = diff
                    heapq.heappop(buy)
                else:
                    heapq.heappop(buy)
                    heapq.heappop(sell)

        return sum(a for _, a in buy + sell) % (10**9+7)
```
