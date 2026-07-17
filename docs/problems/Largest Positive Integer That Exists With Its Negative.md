---
date: 2023-07-25
difficulty: Easy
num: 2441
related_topics:
  - Array
  - Hash Table
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 2441. Largest Positive Integer That Exists With Its Negative

## Description
Given an array, find a pair of positive and negative numbers that have the biggest absolute values.

## Approach / Thoughts
I used two pointers from the beginning and end after using the array sort method. The smallest number should have been put at the front of the array, and based on certain conditions, one of the pointers would move.

For example, if the left number was less than the right, then the left pointer would increment. If they were equal but not the greatest pair, both would increment.

## Solution
```java
class Solution {
    public int findMaxK(int[] nums) {
        
        Arrays.sort(nums);
        int left = 0;
        int right = nums.length - 1;
        int count = -1;

        while (left < right) {
            if (nums[right] == Math.abs(nums[left]) && nums[right] > count && nums[left] < 0) {
                count = nums[right];
            }
            else if (nums[right] > Math.abs(nums[left])) {
                right--;
            }
            else if (nums[right] < Math.abs(nums[left])) {
                left++;
            }
            else {
                right--;
                left++;
            }
        }
        return count;
    }
}
```
