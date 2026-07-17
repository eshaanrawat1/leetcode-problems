---
date: 2025-01-22
difficulty: Medium
num: 1311
related_topics:
  - Array
  - BFS
  - Graph
  - Hash Table
  - Sorting
return: Done
---

# Problem: 1311. Get Watched Videos By Your Friends

## Description
nodes distance k from source

## Approach / Thoughts
bfs, extra stuff for ordering

## Solution
```python
class Solution:
    def watchedVideosByFriends(self, watchedVideos: List[List[str]], friends: List[List[int]], id: int, level: int) -> List[str]:
        q = deque([id])
        visit = {id}
        cur_level = 1

        if level == 0:
            return watchedVideos[id]

        for _ in range(level):
            for _ in range(len(q)):
                cur = q.popleft()
                for nei in friends[cur]:
                    if nei not in visit:
                        q.append(nei)
                        visit.add(nei)

        ans = defaultdict(int)
        for x in q:
            for v in watchedVideos[x]:
                ans[v] += 1
        res = [(k, v) for k,v in ans.items()]

        res.sort(key = lambda x: (x[-1], x[0]))
        return [r[0] for r in res]
```
