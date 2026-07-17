---
date: 2024-09-26
difficulty: Medium
num: 1024
related_topics:
  - Array
  - Dynamic Programming
  - Greedy
return: Done
---

# Problem: 1024. Video Stitching

## Description
same, similar to merging intervals

## Approach / Thoughts
greedy, chain widest possible intervals

## Solution
```python
class Solution:
    def videoStitching(self, clips: List[List[int]], time: int) -> int:
        clips.sort()
        i = max_reach = cnt = 0 

        while max_reach < time:
            current_reach = 0

            while i < len(clips) and clips[i][0] <= max_reach:
                current_reach = max(current_reach, clips[i][1])
                i += 1

            if current_reach == 0:
                return -1 

            max_reach = current_reach 
            cnt += 1

        return cnt 
```
