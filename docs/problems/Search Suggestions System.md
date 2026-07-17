---
date: 2025-11-23
difficulty: Medium
num: 1268
related_topics:
  - Array
  - Binary Search
  - Heap (Priority Queue)
  - Sorting
  - String
  - Trie
return: Done
---

# Problem: 1268. Search Suggestions System

## Description

## Approach / Thoughts
binary search on each prefix

## Solution
```python
class Solution:
    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:
        products.sort()
        n = len(products)

        res = []

        def bs(cur_pref):
            l, r = 0, n-1
            ans = -1
            pref_len = len(cur_pref)

            while l <= r:
                m = (l + r) // 2
                cur_product = products[m][:pref_len]

                if cur_product == cur_pref:
                    ans = m
                    r = m-1
                elif cur_product < cur_pref:
                    l = m+1
                else:
                    r = m-1

            return ans

        pref = ''
        for c in searchWord:
            pref += c
            start = bs(pref)
            res.append([w for w in products[start:start+3] if w.startswith(pref)])
        return res
```
