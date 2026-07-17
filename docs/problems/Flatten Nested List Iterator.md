---
date: 2025-01-16
difficulty: Medium
num: 341
related_topics:
  - DFS
  - Design
  - Iterator
  - Queue
  - Stack
  - Tree
return: Done
---

# Problem: 341. Flatten Nested List Iterator

## Description

## Approach / Thoughts
dfs for going depth

## Solution
```python
# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
\#class NestedInteger:
#    def isInteger(self) -> bool:
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        """
#
#    def getInteger(self) -> int:
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        """
#
#    def getList(self) -> [NestedInteger]:
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        """

class NestedIterator:
    def __init__(self, nestedList: [NestedInteger]):
        self.nl = nestedList
        self.res = deque()
        self.idx = 0

        self._flatten(self.nl)


    def _flatten(self, ls):
        for n in ls:
            if n.isInteger():
                self.res.append(n.getInteger())
            else:
                self._flatten(n.getList())


    def next(self) -> int:
        return self.res.popleft()
        
    
    def hasNext(self) -> bool:
         return self.res

# Your NestedIterator object will be instantiated and called as such:
# i, v = NestedIterator(nestedList), []
# while i.hasNext(): v.append(i.next())
```
