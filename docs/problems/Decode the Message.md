---
date: 2024-12-06
difficulty: Easy
num: 2325
related_topics:
  - Hash Table
  - String
return: Done
---

# Problem: 2325. Decode The Message

## Description
same map key

## Approach / Thoughts
map with loops

## Solution
```python
class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        i = l = 0
        mapping = {' ': ' '}

        while l < 26:
            if key[i] == ' ' or key[i] in mapping:
                i += 1
                continue

            mapping[key[i]] = chr(l + 97)
            i += 1
            l += 1

        return ''.join([mapping[c] for c in message])
```
