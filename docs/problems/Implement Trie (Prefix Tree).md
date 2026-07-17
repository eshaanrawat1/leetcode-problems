---
date: 2024-06-06
difficulty: Medium
num: 208
related_topics:
  - Design
  - Hash Table
  - String
  - Trie
return: Done
---

# Problem: 208. Implement Trie (Prefix Tree)

## Description
implement basic trie

## Approach / Thoughts
implement trie

## Solution
```python
class Node:
    def __init__(self):
        self.children = {}

class Trie:
    def __init__(self):
        self.root = Node()
        self.inserted = set()

    def insert(self, word: str) -> None:
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = Node()
            node = node.children[ch]
        node.end_of_word = True
        self.inserted.add(word)

    def search(self, word: str) -> bool:
        return word in self.inserted
        
    def startsWith(self, prefix: str) -> bool:
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return True

# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
```
