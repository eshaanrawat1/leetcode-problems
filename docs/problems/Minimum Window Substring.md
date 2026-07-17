---
date: 2024-02-03
difficulty: Hard
num: 76
related_topics:
  - Hash Table
  - Sliding Window
  - String
return: Review
---

# Problem: 76. Minimum Window Substring

## Description
Given two strings s and t, find the minimum substring such that all characters in t are included in that substring in any order

## Approach / Thoughts
1. Check the base case if t is empty, return empty

1. Use a counter to add the frequencies of t and declare our current window

1. initialize variables for result list of indices and current length which should be maximized

1. have a left pointer at 0, right pointer in the for loop

1. have a have and need counter where need is number of uniques in t dictionary and have is initially 0, since have is what we have right now in our substring

1. Use sliding window while checking for conditions
    
    1. take current char c
    
    1. put in windows with current frequency
    
    1. if it is equal to the count in t, then increase have counter
    
    1. if have counter is equal to need, than use a while loop to keep popping from the left
        
        1. if length is less, then update substring stored
        
        1. pop left by decreasing dict count
        
        1. increase left pointer
        
    

1. return substring with indices if we have it

## Solution
```python
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if t == "": return ""

        countT, window = {}, {}
        for c in t:
            countT[c] = 1 + countT.get(c, 0)

        res, res_len = [-1, -1], float("inf")
        need, have = len(countT), 0
        l = 0

        for r in range(len(s)):
            c = s[r]
            window[c] = 1 + window.get(c, 0)

            if c in countT and window[c] == countT[c]:
                have += 1

            while have == need:
                if (r - l + 1) < res_len:
                    res = [l, r]
                    res_len = r - l + 1
                
                c = s[l]
                window[c] -= 1

                if c in countT and window[c] < countT[c]:
                    have -= 1
                l += 1
        start, end = res
        return s[start:end+1] if res_len < float("inf") else ""
```
