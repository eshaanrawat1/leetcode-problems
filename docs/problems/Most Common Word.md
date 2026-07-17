---
date: 2024-09-16
difficulty: Easy
num: 819
related_topics:
  - Array
  - Counting
  - Hash Table
  - String
return: Done
---

# Problem: 819. Most Common Word

## Description

## Approach / Thoughts
parse and count words

## Solution
```python
class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        paragraph = paragraph.replace('!', '').replace('?', '').replace("'", '')
        paragraph = paragraph.replace(',', ' ').replace(';', '').replace('.', '')

        banned = {w.lower() for w in banned}
        paragraph = paragraph.split(' ')
        paragraph = [w.lower() for w in paragraph]

        cnt = Counter(paragraph)
        max_freq = 0
        max_word = None
        
        for w in paragraph:
            if w and cnt[w] > max_freq and w not in banned:
                max_freq = cnt[w]
                max_word = w
        return max_word
```
