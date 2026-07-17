---
date: 2023-07-27
difficulty: Easy
num: 26
related_topics:
  - Array
  - Two-Pointer
return: Done
---

# Problem: 26. Remove Duplicates From Sorted Array

## Description
The problem was to remove the duplicates in a sorted array and return the number of unique values. We also had to do this in place, so a new array could not be created.

## Approach / Thoughts
My approach was watching the neetcode solution. What happened was that we had two pointers. If the pointer in front of the other was unique, then the back pointer would be replaced. This was a way of shifting all the unique values to the front of the array and leaving everything at the end unchanged. After that, we just return the left pointer as the counter value.

## Solution
```java
class Solution {
    public int removeDuplicates(int[] nums) {
        
        int left = 1;
        for (int r = 1; r < nums.length; r++) {
            if (nums[r] != nums[r-1]) {
                nums[left] = nums[r];
                left++;
            }
        }
        return left;
    }
}
```
