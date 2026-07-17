---
date: 2024-06-06
difficulty: Medium
num: 648
related_topics:
  - Array
  - Hash Table
  - String
  - Trie
return: Review
---

# Problem: 648. Replace Words

## Description
replace all words with prefix of words

## Approach / Thoughts
use trie, add words in prefix tree, match words by prefix

## Solution
```python
class Node:
    def __init__(self):
        self.children = {}
        self.end_of_word = False

class Trie:
    def __init__(self, dictionary):
        self.root = Node()

        for word in dictionary:
            self.add_word(word)

    def add_word(self, word):
        node = self.root

        for ch in word:
            if ch not in node.children:
                node.children[ch] = Node()
            node = node.children[ch]
        
        node.end_of_word = True

    def search_prefix(self, word):
        node = self.root

        ans = []
        for ch in word:
            if ch not in node.children:
                return word
            
            ans.append(ch)
            node = node.children[ch]
            if node.end_of_word:
                return ''.join(ans)
            
        return word

class Solution:
    def replaceWords(self, dictionary: List[str], sentence: str) -> str:
        t = Trie(dictionary)

        res = []
        for word in sentence.split():
            res.append(t.search_prefix(word))
        return ' '.join(res)
```
