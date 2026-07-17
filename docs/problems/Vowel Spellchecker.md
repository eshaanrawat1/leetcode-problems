---
date: 2025-11-04
difficulty: Medium
num: 966
related_topics:
  - Array
  - Hash Table
  - String
return: Done
---

# Problem: 966. Vowel Spellchecker

## Description

## Approach / Thoughts
hashmaps for exact, cap, vowels match

normalize vowels with *

## Solution
```python
class Solution:
    def spellchecker(self, wordlist: List[str], queries: List[str]) -> List[str]:
        # Exact match.
        # Only capitalization error.
        # Everything else (vowels + optional capitalization error).
        # The problem statement is poor

        vowels = 'aeiouAEIOU'

        def convert(word):
            ls = []
            for c in word:
                if c in vowels:
                    ls.append('*')
                else:
                    ls.append(c)
            return ''.join(ls).lower()


        exact_match = set(wordlist)
        
        cap_match = defaultdict(list)
        for i, w in enumerate(wordlist):
            cap_match[w.lower()].append((i, w))

        vowels_match = defaultdict(list)
        for i, w in enumerate(wordlist):
            vowels_match[convert(w)].append((i, w))

        for c in cap_match:
            cap_match[c].sort()
        for v in vowels_match:
            vowels_match[v].sort()

        res = []
        for q in queries:
            ql = q.lower()
            vm = convert(q)

            if q in exact_match:
                res.append(q)
            elif ql in cap_match:
                res.append(cap_match[ql][0][1])
            elif vm in vowels_match:
                res.append(vowels_match[vm][0][1])
            else:
                res.append("")
        return res
```
