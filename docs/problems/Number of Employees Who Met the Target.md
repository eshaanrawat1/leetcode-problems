---
date: 2023-08-01
difficulty: Easy
num: 2798
related_topics:
  - Array
  - Enumeration
return: Done
---

# Problem: 2798. Number Of Employees Who Met The Target

## Description
Very simple problem of just checking if the value of the index is greater than the target.

## Approach / Thoughts
Traverse through the array and have a counter to find how many employees worked at least the target hours.

## Solution
```java
class Solution {
    public int numberOfEmployeesWhoMetTarget(int[] hours, int target) {
        int count = 0;
        for (int i : hours) {
            if (i >= target) {
                count++;
            }
        }
        return count;
    }
}
```
