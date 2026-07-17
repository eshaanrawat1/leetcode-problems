---
date: 2023-12-29
difficulty: Medium
num: 438
related_topics:
  - Hash Table
  - Sliding Window
  - String
return: Done
---

# Problem: 438. Find All Anagrams In A String

## Description
Given two strings s and p, find the indices of anagrams of p in s. For example acbabc and abc means [0, 3] are the correct indices where the anagrams start at.

## Approach / Thoughts
Create a frequency array for p first which can be done using ord. Then use a sliding window to compare where the frequency array of the substring of s is equivalent to the frequency array of p, if it is add the index.

## Solution
```python
class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        if len(p) > len(s):
            return []
        
        p_freq = [0] * 26 
        for ch in p:
            p_freq[ord(ch) - ord('a')] += 1

        s_freq = [0] * 26
        for i in range(len(p)):
            s_freq[ord(s[i]) - ord('a')] += 1

        res = []
        for i in range(len(p), len(s) + 1):
            if p_freq == s_freq:
                res.append(i - len(p))
            if i == len(s):
                break
            s_freq[ord(s[i]) - ord('a')] += 1
            s_freq[ord(s[i - len(p)]) - ord('a')] -= 1

        return res
```
