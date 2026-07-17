---
date: 2024-10-24
difficulty: Medium
num: 1233
related_topics:
  - Array
  - DFS
  - String
  - Trie
return: Done
---

# Problem: 1233. Remove Sub Folders From The Filesystem

## Description

## Approach / Thoughts
trie for subfolder match

## Solution
```python
class Node:
    def __init__(self):
        self.children = {}
        self.end_of_word = False

class Trie:
    def __init__(self):
        self.root = Node()

    def insert(self, word):
        i, cur = 0, self.root

        while i < len(word):
            if word[i] not in cur.children:
                cur.children[word[i]] = Node()
            cur = cur.children[word[i]]
            i += 1
        cur.end_of_word = True

    def match(self, word):
        i, cur = 0, self.root

        while i < len(word):
            if cur.end_of_word:
                return True
            if word[i] not in cur.children:
                return False
            cur = cur.children[word[i]]
            i += 1

class Solution:
    def removeSubfolders(self, folder: List[str]) -> List[str]:
        folders = [s.split('/') for s in folder]
        folders.sort(key=lambda f: len(f))

        res = []
        t = Trie()

        for f in folders:
            if not t.match(f):
                res.append('/'.join(f))
            t.insert(f)
        return res
```
