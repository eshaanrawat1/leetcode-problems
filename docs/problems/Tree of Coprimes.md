---
date: 2026-04-30
difficulty: Hard
num: 1766
related_topics:
  - Array
  - Math
  - Tree
  - DFS
  - Number Theory
return:
---

# Problem:  

## Description
There is a tree (i.e., a connected, undirected graph that has no cycles) consisting of `n` nodes numbered from `0` to `n - 1` and exactly `n - 1` edges. Each node has a value associated with it, and the **root** of the tree is node `0`.

To represent this tree, you are given an integer array `nums` and a 2D array `edges`. Each `nums[i]` represents the `ith` node's value, and each `edges[j] = [uj, vj]` represents an edge between nodes `uj` and `vj` in the tree.

Two values `x` and `y` are **coprime** if `gcd(x, y) == 1` where `gcd(x, y)` is the **greatest common divisor** of `x` and `y`.

An ancestor of a node `i` is any other node on the shortest path from node `i` to the **root**. A node is **not** considered an ancestor of itself.

Return _an array_ `ans` _of size_ `n`, _where_ `ans[i]` _is the closest ancestor to node_ `i` _such that_ `nums[i]` _and_ `nums[ans[i]]` are **coprime**, or `-1` _if there is no such ancestor_.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Biweekly Contest 46]]

dfs keep track of parent, root at 0
preorder, store list of ancestors by value 
iterate over coprimes and track most recent

## Solution
```python
class Solution:
    def getCoprimes(self, nums: List[int], edges: List[List[int]]):
        adj = defaultdict(list)
        for s, d in edges:
            adj[s].append(d)
            adj[d].append(s)

        maxnum = max(nums)
        cos = defaultdict(list)
        for i in range(maxnum+1):
            for j in range(maxnum+1):
                if gcd(i,j) == 1:
                    cos[i].append(j)
                    cos[j].append(i)
                
        n = len(nums)
        ans = [-1] * n
        
        def dfs(root, par, ancestors, depth):
            root_val = nums[root]

            maxdepth = -1
            maxancestor = None
            
            for coprimes in cos[root_val]:
                if ancestors[coprimes]:
                    cur, curdepth = ancestors[coprimes][-1]
                    if curdepth > maxdepth:
                        maxdepth = curdepth
                        maxancestor = cur
                        ans[root] = cur
                    

            for nei in adj[root]:
                if nei != par:
                    ancestors[root_val].append((root, depth))
                    dfs(nei, root, ancestors, depth+1)
                    ancestors[root_val].pop()

        dfs(0, -1, defaultdict(list), 0)
        return ans