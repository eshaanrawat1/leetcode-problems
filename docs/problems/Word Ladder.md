---
date: 2024-05-21
difficulty: Hard
num: 127
related_topics:
  - BFS
  - Hash Table
  - String
return: Done
---

# Problem: 127. Word Ladder

## Description
shortest path to change word

## Approach / Thoughts
bfs, check by changing characters

## Solution
```python
class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        q = deque([[beginWord, 1]])
        visited = {beginWord}

        word_list = set(wordList)

        while q:
            for i in range(len(q)):
                word, level = q.popleft()
                for letter in 'abcdefghijklmnopqrstuvwxyz':
                    for j in range(len(word)):
                        new_word = word[:j] + letter + word[j+1:]
                        if new_word != word and new_word not in visited and new_word in word_list:
                            if new_word == endWord:
                                return level + 1
                            
                            q.append([new_word, level + 1])
                            visited.add(new_word)
        return 0
        
```
