---
date: 2024-10-08
difficulty: Medium
num: 1358
related_topics:
  - Hash Table
  - Sliding Window
  - String
return: Done
---

# Problem: 1358. Number Of Substrings Containing All Three Characters

## Description
subs with at least all 3

## Approach / Thoughts
incremental build up

when we have a valid subarray, number of steps to make it invalid is the number of subarrays ending at r

## Solution
```python
class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        count = {'a': 0, 'b': 0, 'c': 0}

        l = res = 0
        for r in range(len(s)):
            count[s[r]] += 1

            while all(count.values()):
                count[s[l]] -= 1
                l += 1
            res += l
        return res
```
