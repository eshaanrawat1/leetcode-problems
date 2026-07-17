---
date: 2024-05-10
difficulty: Easy
num: 953
related_topics:
  - Array
  - Hash Table
  - String
return: Done
---

# Problem: 953. Verifying Alien Dictionary

## Description
same, check if words are sorted

## Approach / Thoughts
map indices and check letters of every pair of words

## Solution
```python
class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        indices = {}
        indices['blank'] = -1
        for i, v in enumerate(order):
            indices[v] = i

        for i in range(1, len(words)):
            w1 = words[i-1]
            w2 = words[i]
            for j in range(max(len(w1), len(w2))):
                first_char = w1[j] if j < len(w1) else 'blank'
                second_char = w2[j] if j < len(w2) else 'blank'
                if indices[first_char] < indices[second_char]:
                    break
                elif indices[first_char] == indices[second_char]:
                    continue
                else:
                    return False
        return True
```
