---
date: 2024-09-23
difficulty: Medium
num: 3043
related_topics:
  - Array
  - Hash Table
  - String
  - Trie
return: Done
---

# Problem: 3043. Find The Length Of The Longest Common Prefix

## Description
same, lcp among all pairs

## Approach / Thoughts
two tries for each array

dfs to find longest prefix on tries

## Solution
```python
class Node:
    def __init__(self):
        self.children = {}

class Trie:
    def __init__(self):
        self.root = Node()

    def insert(self, num):
        i, cur = 0, self.root

        while i < len(num):
            if num[i] not in cur.children:
                cur.children[num[i]] = Node()
            cur = cur.children[num[i]]
            i += 1

class Solution:
    def longestCommonPrefix(self, arr1: List[int], arr2: List[int]) -> int:
        t1 = Trie()
        t2 = Trie()

        for w1 in arr1:
            t1.insert(str(w1))
        for w2 in arr2:
            t2.insert(str(w2))

        def dfs(cnt, cur_one, cur_two):
            if cnt >= 9:
                return 0

            res = 0
            for j in range(0, 10):
                s = str(j)
                if (s in cur_one.children) and (s in cur_two.children):
                    res = max(res, 1 + dfs(cnt + 1, cur_one.children[s], cur_two.children[s]))
            return res

        return dfs(0, t1.root, t2.root)
```
