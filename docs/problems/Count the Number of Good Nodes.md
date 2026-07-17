---
date: 2024-08-16
difficulty: Medium
num: 3249
related_topics:
  - DFS
  - Tree
return: Done
---

# Problem: 3249. Count The Number Of Good Nodes

## Description

## Approach / Thoughts
postorder dfs return size of subtree to each node

## Solution
```python
class Solution:
    def countGoodNodes(self, edges: List[List[int]]) -> int:       
        adj = defaultdict(list)
        for s, d in edges:
            adj[s].append(d)
            adj[d].append(s)
            
        adj2 = defaultdict(list)

        visit = set()
        q = deque([0])
        while q:
            cur = q.popleft()
            visit.add(cur)
            
            for nei in adj[cur]:
                if nei not in visit:
                    adj2[cur].append(nei)
                    q.append(nei)
        adj = adj2
            
        self.good = 0
        
        def dfs(node):
            res = 1
            cnt = set()
            
            for nei in adj[node]:
                ans = dfs(nei)
                res += ans
                cnt.add(ans)
                
            if len(cnt) <= 1:
                self.good += 1
            
            return res
    
        dfs(0)
        return self.good
```
