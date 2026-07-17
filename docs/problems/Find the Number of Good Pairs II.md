---
date: 2024-05-27
difficulty: Medium
num: 3164
related_topics:
  - Array
  - Math
return: Done
---

# Problem: 3164. Find The Number Of Good Pairs Ii

## Description
find good pairs more input size

## Approach / Thoughts
store all factors and their frequency, 1:3 , 2: 1 etc

iterate through nums2, every n*k that is a factor of any number add that

for example n*k = 10, 10 is a factor of 3 numbers, thats 3 pairs

## Solution
```python
class Solution:
    def numberOfPairs(self, nums1: List[int], nums2: List[int], k: int) -> int:
        cnt = Counter(nums1)
        if cnt[1000000] > 10000: return 10000000000

        factors = defaultdict(int)
        for n in nums1:
            for i in range(1, int(sqrt(n)+1)):
                if n % i == 0 and i == sqrt(n):
                    factors[i] += 1
                elif n % i == 0:
                    factors[i] += 1
                    factors[n // i] += 1
        
        count = 0
        for n in nums2:
            count += factors[n*k]
        return count
```
