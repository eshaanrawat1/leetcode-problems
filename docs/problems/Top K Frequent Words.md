---
date: 2024-01-25
difficulty: Medium
num: 692
related_topics:
  - Bucket Sort
  - Counting
  - Hash Table
  - Heap (Priority Queue)
  - Sorting
  - String
  - Trie
return: Done
---

# Problem: 692. Top K Frequent Words

## Description
Same as title, but if two words have same frequency they should be sorted lexicographically

## Approach / Thoughts
Build counting sort frequency array and iterate backwards and take the k most frequent elements

## Solution
```python
class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        ans = []
        freq = [[] for _ in range(len(words)+1)]

        c1 = Counter(words)
        for key, val in c1.items():
            freq[val].append(key)

        for i in range(len(freq)-1,-1,-1):
            if freq[i]:
                freq[i].sort()
                ans.extend(freq[i])
        return ans[:k]
```
