---
date: 2024-12-22
difficulty: Medium
num: 2471
related_topics:
  - BFS
  - Binary Tree
  - Tree
return: Done
---

# Problem: 2471. Minimum Number Of Operations To Sort A Binary Tree By Level

## Description

## Approach / Thoughts
level order cycle find thing with union find

count components (n-1) swaps for each component

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class UnionFind:
    def __init__(self, n):
        self.par = list(range(n))
        self.rank = [1] * n
    
    def find(self, n):
        while n != self.par[n]:
            n = self.par[n]
        return n

    def union(self, n1, n2):
        p1, p2 = self.find(n1), self.find(n2)

        if p1 == p2:
            return 

        if self.rank[p1] >= self.rank[p2]:
            self.par[p2] = p1
            self.rank[p1] += self.rank[p2]
        else:
            self.par[p1] = p2
            self.rank[p2] += self.rank[p1]

class Solution:
    def minimumOperations(self, root: Optional[TreeNode]) -> int:

        def count_swaps(arr):
            res = 0

            u = UnionFind(len(arr))
            s = sorted(arr)
            pos = {n:i for i,n in enumerate(s)}

            for i in range(len(arr)):
                if arr[i] != s[i]:
                    u.union(i, pos[arr[i]])

            parents = {u.find(n) for n in range(len(arr))}
            for p in parents:
                res += (u.rank[p] - 1)
            return res

        q = deque([root])
        swaps = 0

        while q:
            order = []
            for _ in range(len(q)):
                node = q.popleft()
                order.append(node.val)

                if node.left: 
                    q.append(node.left)
                if node.right: 
                    q.append(node.right)

            swaps += count_swaps(order)
        return swaps  
```
