---
date: 2024-06-27
difficulty: Hard
num: 212
related_topics:
  - Array
  - Backtracking
  - Matrix
  - String
  - Trie
return: Review
---

# Problem: 212. Word Search Ii

## Description
find all words on board

## Approach / Thoughts
store words in trie, check if there is match with dfs

## Solution
```python
class Node:
    def __init__(self):
        self.children = {}

class Trie:
    def __init__(self):
        self.root = Node()
        self.added = set()

    def insert(self, word):
        cur = self.root
        for c in word:
            if c not in cur.children:
                cur.children[c] = Node()
            cur = cur.children[c]
        self.added.add(word)

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        ROWS, COLS = len(board), len(board[0])
        
        t = Trie()
        for w in words:
            t.insert(w)
        
        res = set()
        visit = set()
        def dfs(r, c, cur_word, node):
            if cur_word in t.added:
                res.add(cur_word)
            if r < 0 or r == ROWS or c < 0 or c == COLS:
                return
            if (r, c) in visit or board[r][c] not in node.children:
                return

            ch = board[r][c]

            visit.add((r, c))
            dfs(r+1, c, cur_word + ch, node.children[ch])
            dfs(r-1, c, cur_word + ch, node.children[ch])
            dfs(r, c+1, cur_word + ch, node.children[ch])
            dfs(r, c-1, cur_word + ch, node.children[ch])
            visit.remove((r, c))

        for r in range(ROWS):
            for c in range(COLS):
                dfs(r, c, "", t.root)
        return list(res)
```
