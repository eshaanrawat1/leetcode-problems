---
date: 2023-07-29
difficulty: Easy
num: 1346
related_topics:
  - Array
  - Binary Search
  - Hash Table
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 1346. Check If N And Its Double Exist

## Description
To check if a double of n exists in the array.

## Approach / Thoughts
Originally tried to use a hashmap, but ended up brute forcing by checking i and j against every other element.

## Solution
```java
class Solution {
    public boolean checkIfExist(int[] arr) {
        
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length; j++) {
                if (arr[i] == 2 * arr[j] && i != j) {
                    return true;
                }
            }
        }
        return false;
    }
}
```
