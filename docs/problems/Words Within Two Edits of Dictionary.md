---
date: 2026-04-21
difficulty: Medium
num: 2452
related_topics:
  - Array
  - String
  - Trie
return:
---

# Problem:  

## Description
You are given two string arrays, `queries` and `dictionary`. All words in each array comprise of lowercase English letters and have the same length.

In one **edit** you can take a word from `queries`, and change any letter in it to any other letter. Find all words from `queries` that, after a **maximum** of two edits, equal some word from `dictionary`.

Return _a list of all words from_ `queries`_,_ _that match with some word from_ `dictionary` _after a maximum of **two edits**_. Return the words in the **same order** they appear in `queries`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
queries + word pairs, check diff count

## Solution
```python
class Solution:
    def twoEditWords(self, queries: List[str], dictionary: List[str]) -> List[str]:
        res = []
        for q in queries:
            for w in dictionary:
                diff = 0
                for x, y in zip(q, w):
                    diff += (x != y)
                if diff <= 2:
                    res.append(q)
                    break
        return res