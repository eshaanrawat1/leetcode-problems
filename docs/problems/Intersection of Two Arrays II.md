---
date: 2023-08-07
difficulty: Easy
num: 350
related_topics:
  - Array
  - Binary Search
  - Hash Table
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 350. Intersection Of Two Arrays Ii

## Description
Same as 349 - find intersection of two arrays but include duplicates.

## Approach / Thoughts
Used a two pointer approach after sorting the arrays. If there was equal element, I added that to an arraylist which would then be moved to an array.

## Solution
```java
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        List<Integer> list = new ArrayList<>();

        int top = 0;
        int bot = 0;

        while (top < nums1.length && bot < nums2.length) {
            if (nums1[top] < nums2[bot]) {
                top++;
            }
            else if (nums1[top] > nums2[bot]) {
                bot++;
            }
            else {
                list.add(nums1[top]);
                top++;
                bot++;
            }
        }
        int[] ans = new int[list.size()];
        int index = 0;
        for (int i : list) {
            ans[index++] = i;
        }
        return ans;
    }
}
```
