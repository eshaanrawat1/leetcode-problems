---
date: 2023-11-03
difficulty: Medium
num: 49
related_topics:
  - Array
  - Hash Table
  - Sorting
  - String
return: Done
---

# Problem: 49. Group Anagrams

## Description
To group all anagrams together in list.

## Approach / Thoughts
My approach was initially to try to sort all strings and do something with ASCII. This would have been O(m * n log(n)) time.

The approach was to iterate through all the words in strs. Then, we make an ASCII array that stores how many of each letter there is. Then, we store a tuple of that ASCII array in the dictionary and all anagrams will have same array. Then we group them, and return the dictionary value.

Important to note that we need a default dict with default value of list to append all the anagrams.

## Solution
```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        ans = collections.defaultdict(list)

        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord("a")] += 1
            ans[tuple(count)].append(s)
        return ans.values()
```
