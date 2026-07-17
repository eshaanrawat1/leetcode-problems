---
date: 2024-07-24
difficulty: Medium
num: 981
related_topics:
  - Binary Search
  - Design
  - Hash Table
  - String
return: Done
---

# Problem: 981. Time Based Key Value Store

## Description
store key, val pairs in dict

ex: foo : [[bar, 1], [bar2, 2] …]

## Approach / Thoughts
binary search since each key is in asc order

## Solution
```python
class TimeMap:

    def __init__(self):
        self.storage = defaultdict(list)
        

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.storage[key].append([value, timestamp])
        

    def get(self, key: str, timestamp: int) -> str:
        search_space = self.storage[key]
        
        idx = None
        l, r = 0, len(search_space)-1
        while l <= r:
            m = (l + r) // 2
            if search_space[m][-1] <= timestamp:
                idx = m
                l = m + 1
            else:
                r = m - 1

        return search_space[idx][0] if idx is not None else ""
        


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)
```
