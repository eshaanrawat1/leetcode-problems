---
date: 2026-05-11
difficulty: Medium
num: 3926
related_topics:
  - 
return:
---

# Problem: 3926. Count Valid Word Occurrences

## Description
You are given an array of strings `chunks`. The strings are concatenated in order to form a single string `s`.

You are also given an array of strings `queries`.

A **word** is defined as a **substring** of `s` that:

	consists of lowercase English letters (`'a'` to `'z'`),

	may include hyphens (`'-'`) only if each hyphen is surrounded by lowercase English letters, and

	is not part of a longer substring that also satisfies the above conditions.

Any character that is not a lowercase English letter or a valid hyphen acts as a separator.

Return an integer array `ans` such that `ans[i]` is the number of occurrences of `queries[i]` as a word in `s`.

A **substring** is a contiguous **non-empty** sequence of characters within a string.

## Approach / Thoughts
[[Weekly Contest 501]]

parse strings - separator and counter

## Solution
```python
class Solution:
    def countWordOccurrences(self, chunks: list[str], queries: list[str]):
        s = ''.join(chunks)
        n = len(s)

        res = []
        tmp = []

        i = 0
        while i < n:
            c = s[i]
            
            if c.isalpha():
                tmp.append(c)           

            elif c == ' ':
                res.append(''.join(tmp))
                tmp = []

            elif c == '-':
                if i == 0 or i == n-1:
                    if tmp:
                        res.append(''.join(tmp))
                        tmp = []
                else:
                    prv = s[i-1]
                    nxt = s[i+1]
                    if prv.isalpha() and nxt.isalpha():
                        tmp.append(c)
                    else:
                        if tmp:
                            res.append(''.join(tmp))
                            tmp = []
                    
            i += 1

        if tmp:
            res.append(''.join(tmp))

        cnt = Counter(res)
        return [cnt[q] for q in queries]
```