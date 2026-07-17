---
date: 2024-10-21
difficulty: Medium
num: 2583
related_topics:
  - BFS
  - Binary Tree
  - Sorting
  - Tree
return: Done
---

# Problem: 2583. Kth Largest Sum In A Binary Tree

## Description

## Approach / Thoughts
bfs level order + max heap

## Solution
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthLargestLevelSum(self, root: Optional[TreeNode], k: int) -> int:
        pq = []
        q = deque([root])

        while q:
            cur_sum = 0
            for _ in range(len(q)):
                node = q.popleft()
                cur_sum += node.val

                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            heapq.heappush(pq, -cur_sum)

        val = None
        for _ in range(k):
            if not pq:
                return -1
            val = heapq.heappop(pq)
        return -val
```
