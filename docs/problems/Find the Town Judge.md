---
date: 2024-02-21
difficulty: Easy
num: 997
related_topics:
  - Array
  - Graph
  - Hash Table
return: Done
---

# Problem: 997. Find The Town Judge

## Description
A town judge trusts no one but everyone trusts them, find the judge

## Approach / Thoughts
Have a trust relationship graph where the key is the person who is being trusted and a list containing all the people who trust them is a value, ex {2: [1,3,4]} means 1,3,4 trust 2

Also have a trust set that stores all people who trust someone else

If a dictionary key has a value of n-1 (all people) and is not in the trust set, return that, else return -1

## Solution
```python
class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        res = defaultdict(list)
        trusters = set()

        if n == 1 and trust == []: return 1

        for p in trust:
            res[p[1]].append(p[0])
            trusters.add(p[0])
        
        for key, val in res.items():
            if len(val) == n-1 and key not in trusters:
                return key
        return -1
```
