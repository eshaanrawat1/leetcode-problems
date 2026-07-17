---
date: 2025-10-25
difficulty: Hard
num: 2306
related_topics:
  - Array
  - Bit Manipulation
  - Enumeration
  - Hash Table
  - String
return: Done
---

# Problem: 2306. Naming A Company

## Description
same, number of unique names by swapping first letters

## Approach / Thoughts
key observations

1 - names with same starting letter are invalid, group by first letter of names

2 - names with same ending suffix after first letter invalid because a switch causes one invalid name, store suffixes

loop over all letter pairs and check count

## Solution
```python
class Solution:
    def distinctNames(self, ideas: List[str]) -> int:
        letter_groups = defaultdict(list)
        suffix_groups = defaultdict(set)

        for word in ideas:
            c = word[0]
            letter_groups[c].append(word)
            suffix_groups[c].add(word[1:])

        res = 0
        for i in range(26):
            ci = chr(i+97)
            si = suffix_groups[ci]

            for j in range(i+1, 26):
                cj = chr(j+97)
                sj = suffix_groups[cj]

                intersect = len(si & sj)
                remi = len(si) - intersect
                remj = len(sj) - intersect

                res += (2 * remi * remj)
        return res
```
