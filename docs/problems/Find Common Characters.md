---
date: 2024-06-04
difficulty: Easy
num: 1002
related_topics:
  - Array
  - Hash Table
  - String
return: Done
---

# Problem: 1002. Find Common Characters

## Description
find common characters including duplicates

## Approach / Thoughts
dict with counter take min value

## Solution
```python
class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        cnt = Counter(words[0])

        for i in range(1, len(words)):
            tmp = Counter(words[i])
            for i in range(26):
                idx = chr(i + 97)
                cnt[idx] = min(cnt[idx], tmp[idx])

        res = []
        for k, v in cnt.items():
            amt = v
            while amt:
                res.append(k)
                amt -= 1
        return res
```
