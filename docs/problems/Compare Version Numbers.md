---
date: 2024-05-02
difficulty: Medium
num: 165
related_topics:
  - String
  - Two-Pointer
return: Done
---

# Problem: 165. Compare Version Numbers

## Description
basically regex, get rid of leading and trailing version 0

## Approach / Thoughts
split and compare based on the max len

## Solution
```python
def compareVersion(self, version1, version2):
        versions1 = [int(v) for v in version1.split(".")]
        versions2 = [int(v) for v in version2.split(".")]
        for i in range(max(len(versions1),len(versions2))):
            v1 = versions1[i] if i < len(versions1) else 0
            v2 = versions2[i] if i < len(versions2) else 0
            if v1 > v2:
                return 1
            elif v1 < v2:
                return -1;
        return 0;
```
