---
date: 2023-08-01
difficulty: Easy
num: 2540
related_topics:
  - Array
  - Binary Search
  - Hash Table
  - Two-Pointer
return: Done
---

# Problem: 2540. Minimum Common Value

## Description
Given two arrays sorted in non-decreasing order, return the least common value in both arrays. If there is none, return -1.

## Approach / Thoughts
My approach was to use the two pointers approach. I had one pointer for the top array and one for the bottom.

If the two index values were equal, I could just return one or the other.

If the top index val was less than the bottom, I would increment the top. This works since both arrays are already sorted. Similarly, if the top val was greater than the bottom, the bottom val would increment.

This loop would go on until the length of the shorter array was reached. This required an && condition.

## Solution
```java
class Solution {
    public int getCommon(int[] nums1, int[] nums2) {
        int top = 0;
        int bot = 0;

        while (top < nums1.length && bot < nums2.length) {
            if (nums1[top] == nums2[bot]) {
                return (nums1[top]);
            }

            else if (nums1[top] < nums2[bot]) {
                top++;
            }

            else {
                bot++;
            }
        }
        return -1;
    }
}
```
