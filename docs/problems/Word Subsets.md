---
date: 2025-01-09
difficulty: Medium
num: 916
related_topics:
  - Array
  - Hash Table
  - String
return: Done
---

# Problem: 916. Word Subsets

## Description

## Approach / Thoughts
for all words2, max letter count

## Solution
```python
class Solution:
    def wordSubsets(self, words1: List[str], words2: List[str]) -> List[str]:
        cnt = Counter()
        for w in words2:
            cnt2 = Counter(w)
            for l in cnt2:
                cnt[l] = max(cnt[l], cnt2[l])


        res = []
        for w in words1:
            flag = True
            cnt2 = Counter(w)
            for l in cnt:
                if cnt2[l] < cnt[l]:
                    flag = False
                    break

            if flag:
                res.append(w)
        return res
```
