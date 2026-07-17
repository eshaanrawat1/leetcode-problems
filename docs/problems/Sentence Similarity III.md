---
date: 2024-10-05
difficulty: Medium
num: 1813
related_topics:
  - Array
  - String
  - Two-Pointer
return: Done
---

# Problem: 1813. Sentence Similarity Iii

## Description
similar if you can insert some words in middle

## Approach / Thoughts
pop matches from both ends to get empty

## Solution
```python
class Solution:
    def areSentencesSimilar(self, sentence1: str, sentence2: str) -> bool:
        w1 = sentence1.split(' ')
        w2 = sentence2.split(' ')

        if len(w2) > len(w1):
            w1, w2 = w2, w1

        w1 = deque(w1)
        w2 = deque(w2)

        while w1 and w2 and w1[0] == w2[0]:
            w1.popleft()
            w2.popleft()

        while w1 and w2 and w1[-1] == w2[-1]:
            w1.pop()
            w2.pop()

        return not w2
```
