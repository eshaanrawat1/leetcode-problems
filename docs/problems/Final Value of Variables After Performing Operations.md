---
date: 2023-08-01
difficulty: Easy
num: 2011
related_topics:
  - Array
  - Simulation
  - String
return: Done
---

# Problem: 2011. Final Value Of Variables After Performing Operations

## Description
There is a string array with various values. If the string value is the same as an increment call, add 1, if it is the same as a decrement call subtract 1. Otherwise do nothing.

## Approach / Thoughts
Used a for each loop and used string methods of .equals to find if the strings are equal for the add and subtract conditions. Otherwise, I just continued the loop.

## Solution
```java
class Solution {
    public int finalValueAfterOperations(String[] operations) {
        int count = 0;
        for (String str : operations) {
            if (str.equals("++X") || str.equals("X++")) {
                count++;
            }
            else if (str.equals("--X") || str.equals("X--")) {
                count--;
            }
            else {
                continue;
            }
        }
        return count;
    }
}
```
