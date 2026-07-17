---
date: 2024-01-15
difficulty: Easy
num: 383
related_topics:
  - Counting
  - Hash Table
  - String
return: Done
---

# Problem: 383. Ransom Note

## Description
Find if you can make a ransom note from a magazine, i.e. ransom is a subset of magazine.

## Approach / Thoughts
Use freq array or counter, and check at each letter if there is a letter present in ransom not present in counter, or more of that letter in ransom. Do this by taking difference ran - mag.

## Solution
```python
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ran, mag = Counter(ransomNote), Counter(magazine)
        for key in ran:
            if ran[key] - mag[key] > 0:
                return False
        return True
```
