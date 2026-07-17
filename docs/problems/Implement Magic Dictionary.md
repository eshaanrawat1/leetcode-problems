---
date: 2026-06-01
difficulty: Medium
num: 676
related_topics:
  - Hash Table
  - String
  - Depth-First Search
  - Design
  - Trie
return:
---

# Problem: 676. Implement Magic Dictionary

## Description
Design a data structure that is initialized with a list of **different** words. Provided a string, you should determine if you can change exactly one character in this string to match any word in the data structure.

Implement the `MagicDictionary` class:

	`MagicDictionary()` Initializes the object.

	`void buildDict(String[] dictionary)` Sets the data structure with an array of distinct strings `dictionary`.

	`bool search(String searchWord)` Returns `true` if you can change **exactly one character** in `searchWord` to match any string in the data structure, otherwise returns `false`.

## Approach / Thoughts
check edit dist for same length

## Solution
```python
class MagicDictionary:

    def __init__(self):
        self.words = set()
        self.m = defaultdict(list)

    def buildDict(self, dictionary: List[str]) -> None:
        self.words = set(dictionary)
        self.m = defaultdict(list)

        for d in dictionary:
            self.m[len(d)].append(d)

    def _hamming(self, w1, w2):
        res = 0
        for x, y in zip(w1, w2):
            if x != y:
                res += 1

            if res > 1:
                return False
        return res == 1

    def search(self, searchWord: str) -> bool:
        l = len(searchWord)
        return any(self._hamming(searchWord, w) for w in self.m[l])


# Your MagicDictionary object will be instantiated and called as such:
# obj = MagicDictionary()
# obj.buildDict(dictionary)
# param_2 = obj.search(searchWord)
```