---
date: 2025-04-10
difficulty: Hard
num: 2999
related_topics:
  - Dynamic Programming
  - Math
  - String
return: Review
---

# Problem: 2999. Count The Number Of Powerful Integers

## Description
same, end with suffix

## Approach / Thoughts
normalize nums so each digit does not exceed limit

count in bases, how many possible digits

## Solution
```python
class Solution:
    def numberOfPowerfulInt(self, start: int, finish: int, limit: int, s: str) -> int:
        
        def normalize(num):
            ans = 0
            less = False

            for n in map(int, str(num)):
                if less:
                    ans = ans * 10 + limit
                elif n > limit:
                    less = True
                    ans = ans * 10 + limit
                else:
                    ans = ans * 10 + n
            return ans


        def count(num):
            ans = 0
            base = limit + 1
            pref = str(num)[:-len(s)]

            for n in map(int, pref):
                ans = ans * base + n
            if int(pref + s) <= num:
                ans += 1
            return ans

        return count(normalize(finish)) - count(normalize(start-1))
```
