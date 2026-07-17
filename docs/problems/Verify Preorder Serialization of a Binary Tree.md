---
date: 2026-03-30
difficulty: Medium
num: 331
related_topics:
  - String
  - Stack
  - Tree
  - Binary Tree
return:
---

# Problem:  

## Description
One way to serialize a binary tree is to use **preorder traversal**. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as `'#'`.
For example, the above binary tree can be serialized to the string `"9,3,4,#,#,1,#,#,2,#,6,#,#"`, where `'#'` represents a null node.

Given a string of comma-separated values `preorder`, return `true` if it is a correct preorder traversal serialization of a binary tree.

It is **guaranteed** that each comma-separated value in the string must be either an integer or a character `'#'` representing null pointer.

You may assume that the input format is always valid.

- For example, it could never contain two consecutive commas, such as `"1,,3"`.

**Note:** You are not allowed to reconstruct the tree.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
simulate preorder

## Solution
```python
class Solution:
    def isValidSerialization(self, preorder: str) -> bool:
    
        def dfs(q):
            if not q:
                return False

            v = q.popleft()
            if v == '#':
                return True

            l = dfs(q)
            r = dfs(q)
            return l and r

        q = deque(preorder.split(','))
        return dfs(q) and not q
        
        
# slots
class Solution:
    def isValidSerialization(self, preorder: str) -> bool:
        slots = 1
        for x in preorder.split(','):
            slots -= 1
            if slots < 0:
                return False
            if x != '#':
                slots += 2
        return slots == 0

