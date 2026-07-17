---
date: 2026-01-22
difficulty: Medium
num: 3815
related_topics:
  - Design
  - Heap (Priority Queue)
return: Done
---

# Problem: 3815. Design Auction System

## Description

## Approach / Thoughts
track orders sorted set

lazy deletion

## Solution
```python
# 5:35
from sortedcontainers import SortedSet

class AuctionSystem:

    def __init__(self):
        self.orders = {}
        self.item_to_orders = defaultdict(SortedSet)
        

    def addBid(self, userId: int, itemId: int, bidAmount: int) -> None:
        self.orders[f"{userId}_{itemId}"] = bidAmount
        self.item_to_orders[itemId].add((bidAmount, userId))
        

    def updateBid(self, userId: int, itemId: int, newAmount: int) -> None:
        self.orders[f"{userId}_{itemId}"] = newAmount
        self.item_to_orders[itemId].add((newAmount, userId))
        

    def removeBid(self, userId: int, itemId: int) -> None:
        del self.orders[f"{userId}_{itemId}"]
        

    def getHighestBidder(self, itemId: int) -> int:
        ss = self.item_to_orders[itemId]

        while ss:
            bid, user = ss[-1]
            key = f"{user}_{itemId}"
            
            if key not in self.orders or bid != self.orders[key]:
                ss.pop()
            else:
                return user
        return -1
        


# Your AuctionSystem object will be instantiated and called as such:
# obj = AuctionSystem()
# obj.addBid(userId,itemId,bidAmount)
# obj.updateBid(userId,itemId,newAmount)
# obj.removeBid(userId,itemId)
# param_4 = obj.getHighestBidder(itemId)
```
