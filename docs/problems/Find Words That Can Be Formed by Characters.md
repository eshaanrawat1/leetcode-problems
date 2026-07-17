---
date: 2024-06-18
difficulty: Easy
num: 1160
related_topics:
  - Array
  - Hash Table
  - String
return: Done
---

# Problem: 1160. Find Words That Can Be Formed By Characters

## Description

## Approach / Thoughts
count chars

## Solution
```python
class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        freq = Counter(chars)

        count = 0
        for w in words:
            check = True
            word_count = Counter(w)
            for c in w:
                if freq[c] < word_count[c]:
                    check = False
                    break
            if check:
                count += len(w)
        return count
```
