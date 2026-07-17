---
date: 2025-03-20
difficulty: Medium
num: 2115
related_topics:
  - Array
  - Graph
  - Hash Table
  - String
  - Topological Sort
return: Done
---

# Problem: 2115. Find All Possible Recipes From Given Supplies

## Description

## Approach / Thoughts
basic topo sort on ingredients, find recipes in common

## Solution
```python
class Solution:
    def findAllRecipes(self, recipes: List[str], ingredients: List[List[str]], supplies: List[str]) -> List[str]:
        adj = defaultdict(list)
        in_degree = Counter()

        for rec, ing in zip(recipes, ingredients):
            for i in ing:
                adj[i].append(rec)
                in_degree[rec] += 1

        q = deque([s for s in supplies if in_degree[s] == 0])
        can_make = set()

        while q:
            cur_ing = q.popleft()
            can_make.add(cur_ing)

            for nei in adj[cur_ing]:
                in_degree[nei] -= 1
                if in_degree[nei] == 0:
                    q.append(nei)
        return list(can_make & set(recipes))
```
