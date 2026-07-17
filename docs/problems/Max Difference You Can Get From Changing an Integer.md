---
date: 2025-06-15
difficulty: Medium
num: 1432
related_topics:
  - Greedy
  - Math
return: Done
---

# Problem: 1432. Max Difference You Can Get From Changing An Integer

## Description
same, no leading 0s

## Approach / Thoughts
check leading 0s replace i with j

## Solution
```python
class Solution:
    def maxDiff(self, num: int) -> int:
        first_num = int(str(num)[0])
        max_num, min_num = -inf, inf

        for i in range(10):
            for j in range(10):
                if i == first_num and j == 0:
                    continue

                ls = list(str(num))
                for k, x in enumerate(ls):
                    if int(x) == i:
                        ls[k] = str(j)
                
                new_num = int(''.join(ls))
                max_num = max(max_num, new_num)
                min_num = min(min_num, new_num)

        return max_num - min_num
```
