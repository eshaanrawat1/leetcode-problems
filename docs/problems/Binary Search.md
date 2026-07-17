---
date: 2023-08-03
difficulty: Easy
num: 704
related_topics:
  - Array
  - Binary Search
return: Done
---

# Problem: 704. Binary Search

## Description
Run a binary search.

## Approach / Thoughts
My approach was to use a binary search approach. First, there was a high and a low and if the target was not found, the array kept throwing away the other half.

## Solution
```java
class Solution {
    public int search(int[] nums, int target) {
        int low = 0;
        int high = nums.length - 1;

        while (low <= high) {
            int mid = low + (high - low ) / 2; 
            if (nums[mid] == target) {
                return mid;
            }

            else if (nums[mid] < target) {
                low = mid + 1;
            }

            else {
                high = mid - 1;
            }
        }
        return -1;
    }
}
```
