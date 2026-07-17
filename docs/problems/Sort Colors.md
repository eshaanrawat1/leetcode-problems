---
date: 2023-08-09
difficulty: Medium
num: 75
related_topics:
  - Array
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 75. Sort Colors

## Description
Given an array of 0,1,2 sort the array.

## Approach / Thoughts
My approach was to count the number of times each variable occurred and allocate that number of space to just overwrite the array in place.

## Solution
```java
class Solution {
    public void sortColors(int[] nums) {
        int cnt0 = 0;
        int cnt1 = 0;
        int cnt2 = 0;

        for (int i : nums) {
            if (i == 0) {cnt0++;}
            else if (i == 1) {cnt1++;}
            else {cnt2++;}
        }

        for (int i = 0; i < nums.length; i++) {
            if (cnt0 > 0) {
                nums[i] = 0;
                cnt0--;
            }
            else if (cnt1 > 0) {
                nums[i] = 1;
                cnt1--;
            }
            else {
                nums[i] = 2;
                cnt2--;
            }
        }
    }
}
```
