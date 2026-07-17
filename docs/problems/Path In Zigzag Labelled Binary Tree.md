---
date: 2026-05-14
difficulty: Medium
num: 1104
related_topics:
  - Math
  - Tree
  - Binary Tree
return:
---

# Problem: 1104. Path In Zigzag Labelled Binary Tree

## Description
In an infinite binary tree where every node has two children, the nodes are labelled in row order.

In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right, while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.

Given the `label` of a node in this tree, return the labels in the path from the root of the tree to the node with that `label`.

## Approach / Thoughts

math - know how many nodes in each level 
handle reverse rows - helper functions for index and value
## Solution
```python
class Solution:
    def pathInZigZagTree(self, label: int) -> List[int]:

        def value_of(pos, row):
            if row % 2 == 1:
                return 2**(row+1)-1 - pos

            return 2**row + pos

        def index_of(val, row):
            idx = val - 2**row
            if row % 2 == 1:
                idx = 2**(row+1) - (val + 1)
            return idx 

        path = [label]

        cur = label
        while cur != 1:
            row = floor(math.log2(cur))
            cur_idx = index_of(cur, row)
            par_idx = cur_idx // 2
            par_val = value_of(par_idx, row-1)

            cur = par_val
            path.append(cur)
        return path[::-1]
```