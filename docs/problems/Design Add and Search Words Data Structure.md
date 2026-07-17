---
date: 2024-07-18
difficulty: Medium
num: 211
related_topics:
  - DFS
  - Design
  - String
  - Trie
return: Done
---

# Problem: 211. Design Add And Search Words Data Structure

## Description

## Approach / Thoughts
classic trie problem, auto match required recursion for all options

## Solution
```python
class Node:
    def __init__(self):
        self.children = {}
        self.end = False

class Trie:
    def __init__(self):
        self.root = Node()

    def insert(self, word):
        cur = self.root

        for ch in word:
            if ch not in cur.children:
                cur.children[ch] = Node()
            cur = cur.children[ch]
        cur.end = True

    def match(self, cur, word):
        for i, ch in enumerate(word):
            if ch != '.':
                if ch in cur.children:
                    cur = cur.children[ch]
                else:
                    return False
            else:
                res = False
                for ch in cur.children:
                    res = res or self.match(cur.children[ch], word[i+1:])
                return res
        return True if cur.end else False

class WordDictionary:
    def __init__(self):
        self.t = Trie()

    def addWord(self, word: str) -> None:
        self.t.insert(word)

    def search(self, word: str) -> bool:
        return self.t.match(self.t.root, word)


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
```
