---
date: 2023-09-27
difficulty: Medium
num: 1343
related_topics:
  - Array
  - Sliding Window
return: Done
---

# Problem: 1343. Number Of Sub Arrays Of Size K And Average Greater Than Or Equal To Threshold

## Description
Basically the name. We are given a fixed size subarray of size k and we have to find the number of subarrays in the array that have an average greater than some threshold number.

## Approach / Thoughts
I broke this problem up into two main parts and solved it with a two-pass for loop.

The first part involved finding the sum of the first subarray which was from 0 to k-1.

The second part would have a left pointer at 0 and a right pointer at k. We would slowly move the sliding window over by 1, each time subtracting the left variable and adding the right.

The counter is incremented if the average is greater than the threshold.

## Solution
```python
class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        
        L, currSum, count = 0, 0, 0

        for i in range(0, k):
            currSum += arr[i]
        if currSum / k >= threshold:
            count += 1

        for R in range(k, len(arr)):
            currSum = currSum - arr[L] + arr[R]
            if currSum / k >= threshold: 
                count += 1
            L += 1

        return count
```
