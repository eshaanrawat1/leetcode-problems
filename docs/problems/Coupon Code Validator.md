---
date: 2025-12-13
difficulty: Easy
num: 3006
related_topics:
  - Array
  - Hash Table
  - Sorting
  - String
return: Done
---

# Problem: 3006. Coupon Code Validator

## Description
same coupons

## Approach / Thoughts
same custom sort

## Solution
```python
class Solution:
    def validateCoupons(self, code: List[str], businessLine: List[str], isActive: List[bool]) -> List[str]:
        n = len(code)
        res = []

        def valid_id(cur):
            if not cur:
                return False

            for c in cur:
                if not (c.isalnum() or c == '_'):
                    return False
            return True

        def valid_bus(cur):
            return cur in ["electronics", "grocery", "pharmacy", "restaurant"]

        for i in range(n):
            ids = code[i]
            bus = businessLine[i]
            ac = isActive[i]

            if valid_id(ids) and valid_bus(bus) and ac:
                res.append((ids, bus))


        mapping = {
            "electronics": 1,
            "grocery": 2,
            "pharmacy": 3,
            "restaurant": 4
        }

        res.sort(key=lambda x: (mapping[x[1]], x[0]))
        return [x[0] for x in res]
```
