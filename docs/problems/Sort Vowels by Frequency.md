---
date: 2026-04-26
difficulty: Medium
num: 3913
related_topics:
  - Array
  - String
return:
---

# Problem:  

## Description
You are given a string `s` consisting of lowercase English characters.

Rearrange only the **vowels** in the string so that they appear in **non-increasing** order of their frequency.

If multiple vowels have the same **frequency**, order them by the position of their **first occurrence** in `s`.

Return the modified string.

Vowels are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`.

The **frequency** of a letter is the number of times it occurs in the string.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Weekly Contest 499]]

sort and fill

## Solution
```python
class Solution:
    def sortVowels(self, s: str) -> str:
        # 3:40
        
        vowels = ['a', 'e', 'i', 'o', 'u']
        v = []

        pos = {}
        for i,c in enumerate(s):
            if c in vowels:
                v.append(c)
                if c not in pos:
                    pos[c] = i

        for c in vowels:
            if c not in pos:
                pos[c] = inf

        freq = Counter(s)
        v.sort(key = lambda x: (-freq[x], pos[x]))
        v = deque(v)

        res = []
        for c in s:
            if c not in vowels:
                res.append(c)
            else:
                res.append(v.popleft())
        return ''.join(res)
