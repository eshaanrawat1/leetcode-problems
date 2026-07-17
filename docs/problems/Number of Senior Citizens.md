---
date: 2024-08-01
difficulty: Easy
num: 2678
related_topics:
  - Array
  - String
return: Done
---

# Problem: 2678. Number Of Senior Citizens

## Description
find age > 60

## Approach / Thoughts
parse string

## Solution
```python
class Solution:
    def countSeniors(self, details: List[str]) -> int:
        return sum(1 for i in range(len(details)) if int(details[i][11] + details[i][12]) > 60)
```
