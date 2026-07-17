---
date: 2024-02-20
difficulty: Medium
num: 1456
related_topics:
  - Sliding Window
  - String
return: Done
---

# Problem: 1456. Maximum Number Of Vowels In A Substring Of Given Length

## Description
Same as problem text

## Approach / Thoughts
Use set to keep track of vowels

Make initial sliding window, keeping track of vowel count

Add right pointer, subtract left pointer

Keep track of max vowels

## Solution
```python
class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = {"a", "e", "i", "o", 'u'}

        res, cur = -1, 0
        for i in range(k):
            if s[i] in vowels:
                cur += 1
        res = max(res, cur)
        
        l = 0
        for i in range(k, len(s)):
            if s[i] in vowels: cur += 1
            if s[l] in vowels: cur -= 1
            res = max(res, cur)
            l += 1
        return res
```
