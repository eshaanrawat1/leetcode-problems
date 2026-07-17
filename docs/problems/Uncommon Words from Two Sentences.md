---
date: 2024-09-16
difficulty: Easy
num: 884
related_topics:
  - Counting
  - Hash Table
  - String
return: Done
---

# Problem: 884. Uncommon Words From Two Sentences

## Description

## Approach / Thoughts
check if count of word is 1 among both strings

## Solution
```python
class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
        cnt1 = Counter(s1.split(' '))
        cnt2 = Counter(s2.split(' '))

        res = []
        for w in (s1 + ' ' + s2).split(' '):
            if cnt1[w] + cnt2[w] == 1:
                res.append(w)
        return res
```
