---
date: 2026-03-29
difficulty: Medium
num: 2840
related_topics:
  - Senior
  - Hash Table
  - String
  - Sorting
return:
---

# Problem:  

## Description
You are given two strings `s1` and `s2`, both of length `n`, consisting of **lowercase** English letters.

You can apply the following operation on **any** of the two strings **any** number of times:

- Choose any two indices `i` and `j` such that `i < j` and the difference `j - i` is **even**, then **swap** the two characters at those indices in the string.

Return `true` _if you can make the strings_ `s1` _and_ `s2` _equal, and_ `false` _otherwise_.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
odd and even positions

## Solution
```python
class Solution:
    def checkStrings(self, s1: str, s2: str) -> bool:
        c1_even = Counter(c for i,c in enumerate(s1) if i%2==0)
        c1_odd = Counter(c for i,c in enumerate(s1) if i%2==1)

        c2_even = Counter(c for i,c in enumerate(s2) if i%2==0)
        c2_odd = Counter(c for i,c in enumerate(s2) if i%2==1)

        return c1_even == c2_even and c1_odd == c2_odd