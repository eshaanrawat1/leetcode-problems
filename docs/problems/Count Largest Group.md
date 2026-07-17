---
date: 2025-04-22
difficulty: Easy
num: 1399
related_topics:
  - Hash Table
  - Math
return: Done
---

# Problem: 1399. Count Largest Group

## Description
same, largest digit sums group

## Approach / Thoughts
max digit sum is 36 - count digit sum

## Solution
```python
class Solution:
    def countLargestGroup(self, n: int) -> int:
        
        def dig_sum(x):
            res = 0
            while x > 0:
                res += (x % 10)
                x //= 10
            return res

        cnt = [0] * 50
        for i in range(1, n+1):
            cnt[dig_sum(i)] += 1

        max_val = max(cnt)
        return sum(1 for x in cnt if x == max_val)
```
