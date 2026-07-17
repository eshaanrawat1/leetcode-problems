---
date: 2023-08-12
difficulty: Medium
num: 53
related_topics:
  - Array
  - Divide and Conquer
  - Dynamic Programming
return: Done
---

# Problem: 53. Maximum Subarray

## Description
To find the maximum sum subarray in an array.

## Approach / Thoughts
My original approach was to use the Kadane algorithm to solve this problem but it did not clear every single test case since it started the comparison at element 1. Then, I had to find the modified version of the Kadane algorithm.

This version would iterate through the array and add values to sum. It would then take the max between sum and another var to keep in place the maximum subarray in the entire array.

## Solution
```java
class Solution {
    public int maxSubArray(int[] nums) {
        int sum = 0;
        int max = Integer.MIN_VALUE;

        if (nums.length == 1) {return nums[0];}

        for (int i : nums) {
            sum += i;
            max = Math.max(sum, max);

            if (sum < 0) {
                sum = 0;
            }
        }
        return max;
    }
}
```
