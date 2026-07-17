---
date: 2023-07-27
difficulty: Easy
num: 1299
related_topics:
  - Array
return: Done
---

# Problem: 1299. Replace Elements With Greatest Element On Right Side

## Description
The problem was to replace each index with the maximum value to its right.

## Approach / Thoughts
My approach was the brute force approach which just used two nested for loops and compared each element individually. Not very efficient.

## Solution
```java
class Solution {
    public int[] replaceElements(int[] arr) {
        int pl = 0;
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = i+1; j < arr.length; j++) {
                pl = Math.max(pl, arr[j]);
            }
            arr[i] = pl;
            pl = 0;
        }
        arr[arr.length - 1] = -1;
        return arr;
    }
}
```
