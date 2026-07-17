---
date: 2023-08-07
difficulty: Easy
num: 349
related_topics:
  - Array
  - Binary Search
  - Hash Table
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 349. Intersection Of Two Arrays

## Description
Given two arrays, return an array that is composed of all elements present in both arrays.

## Approach / Thoughts
My approach was to use a hashset approach. First, I iterate through nums1 and add all of the elements in that array to the hashset. This removes all duplicates. Then, I create a separate hashset called intersection and iterate through nums2. If I find a duplicate, then that number is added to the hashset intersection.

After that loop, do one more iteration to copy over all of the elements to an array.

## Solution
```java
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
       HashSet<Integer> set = new HashSet<>();
       for (int i : nums1) {
           set.add(i);
       }

       HashSet<Integer> intersection = new HashSet<>();
       for (int i : nums2) {
           if (set.contains(i)) {
               intersection.add(i);
           }
       }

       int[] answer = new int[intersection.size()];
       int index = 0;
       for (int j : intersection) {
           answer[index] = j;
           index++;
       }

       return answer;
    }
}
```
