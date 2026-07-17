---
date: 2026-05-07
difficulty: Easy
num: 3838
related_topics:
  - Array
  - String
  - Simulation
return:
---

# Problem: 3838. Weighted Word Mapping

## Description
You are given an array of strings `words`, where each string represents a word containing lowercase English letters.

You are also given an integer array `weights` of length 26, where `weights[i]` represents the weight of the `ith` lowercase English letter.

The **weight** of a word is defined as the **sum** of the weights of its characters.

For each word, take its weight modulo 26 and map the result to a lowercase English letter using reverse alphabetical order (`0 -> 'z', 1 -> 'y', ..., 25 -> 'a'`).

Return a string formed by concatenating the mapped characters for all words in order.

## Approach / Thoughts
[[Biweekly Contest 176]]

brute force

## Solution
```python
class Solution:
    def mapWordWeights(self, words: List[str], weights: List[int]) -> str:

        mapping = {}
        alpha = 'abcdefghijklmnopqrstuvwxyz'
        for i in range(26):
            mapping[i] = alpha[~i]
        
        res = []
        for w in words:
            cur = 0
            for c in w:
                idx = ord(c) - ord('a')
                cur += weights[idx]
            res.append(cur % 26)

        return ''.join(mapping[i] for i in res)
```