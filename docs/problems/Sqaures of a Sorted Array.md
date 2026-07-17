---
date: 2023-07-20
difficulty: Easy
num: 977
related_topics:
  - Array
  - Sorting
  - Two-Pointer
return: Review
---

# Problem: 977. Sqaures Of A Sorted Array

## Description
The problem was to square an array and sort it in non-decreasing order.

## Approach / Thoughts
My approach was pretty simple, where I would square the array and just sort the array using the built-in java function.

## Solution
```java
class Solution {
    public int[] sortedSquares(int[] nums) {
        
        for (int i = 0; i < nums.length; i++) {
            nums[i] *= nums[i];
        }
        
        Arrays.sort(nums);
        return nums;
    }
}
```
