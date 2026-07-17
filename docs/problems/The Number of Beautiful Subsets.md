---
date: 2024-05-22
difficulty: Medium
num: 2597
related_topics:
  - Array
  - Backtracking
  - Dynamic Programming
  - Sorting
return: Done
---

# Problem: 2597. The Number Of Beautiful Subsets

## Description
find num of beautiful subsets, where no two elements have abs diff k

## Approach / Thoughts
use dict to keep track of elements not allowed and skipped them

backtracking

## Solution
```python
class Solution:
    def beautifulSubsets(self, nums: List[int], k: int) -> int:
        self.count = 0

        def dfs(i, sub, diff):
            if i == len(nums):
                self.count += 1
                return 
            
            p_comp = nums[i] + k
            n_comp = nums[i] - k

            if not (diff[p_comp] or diff[n_comp]):           
                diff[nums[i]] += 1
                sub.append(nums[i])
                dfs(i+1, sub, diff)

                diff[nums[i]] -= 1
                if diff[nums[i]] == 0:
                    del diff[nums[i]]
                sub.pop()
                dfs(i+1, sub, diff)
            else:
                dfs(i+1, sub, diff)

        diff = defaultdict(int)
        dfs(0, [], diff)
        return self.count-1
```
