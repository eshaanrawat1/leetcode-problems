---
date: 2024-06-03
difficulty: Easy
num: 409
related_topics:
  - Greedy
  - Hash Table
  - String
return: Done
---

# Problem: 409. Largest Palindrome

## Description
find longest palindrome that can be made from letters

## Approach / Thoughts
count evens and odds

## Solution
```python
class Solution:
    def longestPalindrome(self, s: str) -> int:
        cnt = Counter(s)
        total = 0

        for k, v in cnt.items():
            if v > 1:
                amt = v // 2 * 2
                cnt[k] -= amt
                total += amt
        
        for k, v in cnt.items():
            if v == 1:
                return total + 1
        return total
                
```
