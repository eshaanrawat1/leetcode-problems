---
date: 2024-01-16
difficulty: Medium
num: 380
related_topics:
  - Array
  - Design
  - Hash Table
  - Math
  - Randomized
return: Done
---

# Problem: 380. Insert Delete Getrandom O(1)

## Description
Create a class that supports O(1) access, deletion, and getting a random element.

## Approach / Thoughts
Use set for O(1) access and deletion. Convert to list for random

## Solution
```python
import random
class RandomizedSet:

    def __init__(self):
        self.random_set = set()
        

    def insert(self, val: int) -> bool:
        if val not in self.random_set:
            self.random_set.add(val)
            return True
        return False
        

    def remove(self, val: int) -> bool:
        if val in self.random_set:
            self.random_set.discard(val)
            return True
        return False
        

    def getRandom(self) -> int:
        return random.choice(list(self.random_set))
        


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
```
