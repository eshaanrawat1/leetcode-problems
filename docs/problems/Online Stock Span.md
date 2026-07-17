---
date: 2024-05-06
difficulty: Medium
num: 901
related_topics:
  - Data Stream
  - Design
  - Monotonic Stack
  - Stack
return: Done
---

# Problem: 901. Online Stock Span

## Description
find span which is number to left less than consecutive

## Approach / Thoughts
monotonic stacks with pairs

## Solution
```python
class StockSpanner:

    def __init__(self):
        self.stocks = []

    def next(self, price: int) -> int:
        count = 1
        while self.stocks and price >= self.stocks[-1][0]:
            count += self.stocks.pop()[1]
        self.stocks.append([price, count])
        return count


# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)
```
