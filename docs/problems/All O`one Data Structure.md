---
date: 2024-09-29
difficulty: Hard
num: 432
related_topics:
  - Design
  - Doubly-Linked List
  - Hash Table
  - Linked List
return: Review
---

# Problem: 432. All O`One Data Structure

## Description

## Approach / Thoughts
dll with freq buckets

## Solution
```python
class Node:
    def __init__(self):
        self.keys = set()
        self.prev = self.nxt = None

    def add_key(self, key):
        self.keys.add(key)

    def remove_key(self, key):
        self.keys.remove(key)

    def get_key(self):
        if self.keys:
            res = self.keys.pop()
            self.keys.add(res)
            return res
        return ""

    def count(self):
        return len(self.keys)
    
class DLL:
    def __init__(self):
        self.head, self.tail = Node(), Node()
        self.head.nxt = self.tail
        self.tail.prev = self.head

    def insert_after(self, x):
        node, temp = Node(), x.nxt
        x.nxt, node.prev = node, x
        node.nxt, temp.prev = temp, node
        return node
    
    def insert_before(self, x):
        return self.insert_after(x.prev)

    def remove(self, x):
        prev_node = x.prev
        prev_node.nxt, x.nxt.prev = x.nxt, prev_node
        return

class AllOne:

    def __init__(self):
        self.dll = DLL()
        self.counter = defaultdict(int)
        self.node_freq = {0: self.dll.head}

    def _remove_key(self, pf, key):
        node = self.node_freq[pf]
        node.remove_key(key)
        if node.count() == 0:
            self.dll.remove(node)
            self.node_freq.pop(pf)

    def inc(self, key: str) -> None:
        self.counter[key] += 1
        cf, pf = self.counter[key], self.counter[key]-1
        if cf not in self.node_freq:
            self.node_freq[cf] = self.dll.insert_after(self.node_freq[pf])
        self.node_freq[cf].add_key(key)
        if pf > 0:
            self._remove_key(pf, key)

    def dec(self, key: str) -> None:
        if key in self.counter:
            self.counter[key] -= 1
            cf, pf = self.counter[key], self.counter[key]+1
            if self.counter[key] == 0:
                self.counter.pop(key)
            if cf != 0:
                if cf not in self.node_freq:
                    self.node_freq[cf] = self.dll.insert_before(self.node_freq[pf])
                self.node_freq[cf].add_key(key)
            self._remove_key(pf, key)

    def getMaxKey(self) -> str:
        return self.dll.tail.prev.get_key()

    def getMinKey(self) -> str:
        return self.dll.head.nxt.get_key()


# Your AllOne object will be instantiated and called as such:
# obj = AllOne()
# obj.inc(key)
# obj.dec(key)
# param_3 = obj.getMaxKey()
# param_4 = obj.getMinKey()
```
