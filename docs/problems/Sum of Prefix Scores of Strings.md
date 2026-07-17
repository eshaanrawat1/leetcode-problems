---
date: 2024-09-24
difficulty: Hard
num: 2416
related_topics:
  - Array
  - Counting
  - String
  - Trie
return: Review
---

# Problem: 2416. Sum Of Prefix Scores Of Strings

## Description

## Approach / Thoughts
trie keep track of counts

## Solution
```python
class Node:
    def __init__(self):
        self.children = {}

class Trie:
    def __init__(self):
        self.root = Node()

    def insert(self, word):
        i, cur = 0, self.root

        while i < len(word):
            if word[i] not in cur.children:
                cur.children[word[i]] = [1, Node()]
            else:
                cur.children[word[i]][0] += 1
            cur = cur.children[word[i]][1]
            i += 1

    def count(self, word):
        i, cur = 0, self.root
        score = 0

        while i < len(word):
            score += cur.children[word[i]][0]
            cur = cur.children[word[i]][1]
            i += 1
        return score

class Solution:
    def sumPrefixScores(self, words: List[str]) -> List[int]:
        t = Trie()
        for w in words:
            t.insert(w)
        return [t.count(w) for w in words]
```
