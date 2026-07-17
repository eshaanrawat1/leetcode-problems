---
date: 2023-07-29
difficulty: Easy
num: 448
related_topics:
  - Array
  - Hash Table
return: Done
---

# Problem: 448. Find All Numbers Disappeared In An Array

## Description
To find all the numbers in an array that were not there. For example, the length of the array is the range where the range is [1, length]. All the numbers in the array that are not in that range should be added to an arraylist and returned.

## Approach / Thoughts
I used a hashset to solve this problem since a hashset gets rid of all duplicate values. Once the hashset added all the values in the array, I ran a for loop that traversed the entirety of the range. If a value was not found in the range, it was added to the list.

## Solution
```java
class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        
        List<Integer> list = new ArrayList<>();
        HashSet<Integer> set = new HashSet<>();
        int N = nums.length;

        for (int i : nums) {
            set.add(i);
        }

        for (int i = 1; i <= N; i++) {
            if (!set.contains(i)) {
                list.add(i);
            }
        }

        return list;
    }
}
```
