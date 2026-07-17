---
date: 2026-06-15
difficulty: Medium
num: 3960
related_topics:
  - 
return:
---

# Problem: 3960. Frequency Balance Subarray

## Description
You are given an integer array ​​​​​​​`nums`.

Define a **frequency balance subarray** as follows:

	- If the subarray contains only one distinct value, it is frequency balanced.

	- Otherwise, there must exist a positive integer `f` such that every distinct value in the subarray occurs either `f` or `2 * f` times, and both frequencies occur among the distinct values.

Return an integer denoting the length of the **longest** frequency balance subarray.

## Approach / Thoughts
[[Weekly Contest 506]]

keep 2 hashmaps
- first dict for number -> how many times it appears
- second dict for freq -> how many times it appears
- check two cases for single element or only two frequencies in the array 

update frequencies with + and - handle case for 0
iterate over every subarray
## Solution
```python
class Solution:
    def getLength(self, nums: List[int]) -> int:
        n = len(nums)
        res = 1

        for i in range(n):
            cnt = Counter()
            freq = Counter()
            
            for j in range(i, n):
                f = cnt[nums[j]]
                if f != 0:
                    freq[f] -= 1
                    if freq[f] == 0:
                        del freq[f]

                cnt[nums[j]] += 1
                f = cnt[nums[j]]
                freq[f] += 1

                if len(cnt) == 1:
                    res = max(res, j - i + 1)
                    
                elif len(freq) == 2:
                    a, b = sorted(freq.keys())
                    if a * 2 == b:
                        res = max(res, j - i + 1)   
                
        return res
```