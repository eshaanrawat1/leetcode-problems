---
date: 2023-08-13
difficulty: Medium
num: 215
related_topics:
  - Array
  - Divide and Conquer
  - Heap (Priority Queue)
  - Quickselect
  - Sorting
return: Done
---

# Problem: 215. Kth Largest Element

## Description
To find the kth largest element in a sorted array. For example, the greatest number would be the first largest element and so on.

## Approach / Thoughts
My approach was to sort the array first. After sorting the array, I iterated through the array in reverse order. I kept a counter value initialized to 0. If the counter was equal to k it signaled that it was that largest element. At that point, the loop would break and return the given value.

If not, then the count would be incremented.

## Solution
```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        Arrays.sort(nums);
        int count = 1;
        for (int i = nums.length - 1; i >= 0; i--) {
            if (count == k) {
                return nums[i];
            }
            count++;
        }
        return -1;
    }
}
```
