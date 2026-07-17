---
date: 2023-12-24
difficulty: Easy
num: 1758
related_topics:
  - String
return: Done
---

# Problem: 1758. Minimum Changes To Make Alternating Binary String

## Description
Same as problem description

## Approach / Thoughts
Consider minimum steps to make alternating string starting at 0 and alternating string starting at 1. Can be done in 1 pass.

## Solution
```javascript
class Solution:
    def minOperations(self, s: str) -> int:
        zero_count, one_count = 0, 0

        for i in range(len(s)):
            if i % 2 == 0 and s[i] == '1':
                zero_count += 1
            elif i % 2 == 1 and s[i] == '0':
                zero_count += 1

            if i % 2 == 0 and s[i] == '0':
                one_count += 1
            elif i % 2 == 1 and s[i] == '1':
                one_count += 1
 
        return min(zero_count, one_count)
```
