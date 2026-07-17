---
date: 2025-12-02
difficulty: Hard
num: 460
related_topics:
  - Design
  - Doubly-Linked List
  - Hash Table
  - Linked List
return: Done
---

# Problem: 460. Lfu Cache

## Description

## Approach / Thoughts
sorted set with keys, keep track of timestamp

## Solution
```python
class LFUCache:

    def __init__(self, capacity: int):
        self.freq = defaultdict(SortedSet)
        self.key_to_info = {}

        self.capacity = capacity
        self.cur_capacity = 0

        self.timestamp = 0
        
    def get(self, key: int) -> int:
        self.timestamp += 1

        if key in self.key_to_info:
            cur_val, cur_time, cur_freq = self.key_to_info[key]

            self.freq[cur_freq].remove((cur_time, key))
            self.freq[cur_freq+1].add((self.timestamp, key))

            self.key_to_info[key] = (cur_val, self.timestamp, cur_freq+1)
            return cur_val
        
        return -1

    def _pop_min_freq(self):
        for i in range(1000):
            if self.freq[i]:
                time, key = self.freq[i][0]
                self.freq[i].remove((time, key))
                del self.key_to_info[key]
                return

    def put(self, key: int, value: int) -> None:
        self.timestamp += 1

        if key not in self.key_to_info:
            if self.capacity == self.cur_capacity:
                self.cur_capacity -= 1
                self._pop_min_freq()

            self.key_to_info[key] = (value, self.timestamp, 1)
            self.freq[1].add((self.timestamp, key))
            self.cur_capacity += 1
            return 


        cur_val, cur_time, cur_freq = self.key_to_info[key]

        self.freq[cur_freq].remove((cur_time, key))
        self.freq[cur_freq+1].add((self.timestamp, key))

        self.key_to_info[key] = (value, self.timestamp, cur_freq+1)


# Your LFUCache object will be instantiated and called as such:
# obj = LFUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
```
