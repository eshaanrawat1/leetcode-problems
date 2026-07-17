---
date: 2026-06-26
difficulty: Hard
num: 839
related_topics:
  - Array
  - Hash Table
  - String
  - Depth-First Search
  - Breadth-First Search
  - Union-Find
return:
---

# Problem: 839. Similar String Groups

## Description
Two strings, `X` and `Y`, are considered similar if either they are identical or we can make them equivalent by swapping at most two letters (in distinct positions) within the string `X`.

For example, `"tars"` and `"rats"` are similar (swapping at positions `0` and `2`), and `"rats"` and `"arts"` are similar, but `"star"` is not similar to `"tars"`, `"rats"`, or `"arts"`.

Together, these form two connected groups by similarity: `{"tars", "rats", "arts"}` and `{"star"}`.  Notice that `"tars"` and `"arts"` are in the same group even though they are not similar.  Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group.

We are given a list `strs` of strings where every string in `strs` is an anagram of every other string in `strs`. How many groups are there?

## Approach / Thoughts
brute force - use diff count for similar strings + union find

## Solution
```python
class UnionFind:
    def __init__(self, n):
        self.par = list(range(n))
        self.rank = [1] * n

    def find(self, n):
        while n != self.par[n]:
            n = self.par[n]
        return n

    def union(self, n1, n2):
        p1 = self.find(n1) 
        p2 = self.find(n2) 

        if p1 == p2:
            return 

        if self.rank[p1] < self.rank[p2]:
            p1, p2 = p2, p1

        self.par[p2] = p1
        self.rank[p1] += self.rank[p2]


class Solution:
    def numSimilarGroups(self, strs: List[str]) -> int:
        # constraints are pretty light 
        # 300 strings * 300 ch = 10*5 - maybe not
        # at least one other similar means they are in a group
        # can use union find 

        # just need to figure out efficient way for swaps
        # brute force generating will TLE 
        # all words are anagrams of each other?
        # trivial case - same words are similar 

        # precompute similar?
        # diff cnt <= 2

        # trie?
        # would have to remove and insert words to compare

        # 36:50
        # bruh spent so long optimizing can just brute force
        # note to self - try brute force first always

        n = len(strs)
        u = UnionFind(n)

        def similar(i, j):
            s1 = strs[i]
            s2 = strs[j]
            res = 0
            
            for x, y in zip(s1, s2):
                res += (x != y)
                if res > 2:
                    return False
            return True

        for i in range(n):
            for j in range(i+1, n):
                if similar(i, j):
                    u.union(i, j)
        return len({u.find(i) for i in range(n)})
```