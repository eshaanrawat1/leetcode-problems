---
date: 2023-07-20
difficulty: Easy
num: 1480
related_topics:
  - Array
  - Prefix Sum
return: Done
---

# Problem: 1480. Running Sum Of 1D Array

## Description
The problem was to make a running sum array. This is an array where each element is the sum of the elements before it, itself included.

## Approach / Thoughts
My approach was to use a prefix sum which does exactly what the problem is asking for.

## Solution
```java
class Solution {
    public int[] runningSum(int[] nums) {
        for (int i = 1; i < nums.length; i++) {
            nums[i] += nums[i-1];
        }
        return nums;
    }
}
```
