---
date: 2023-08-15
difficulty: Easy
num: 2185
related_topics:
  - Array
  - String
return: Done
---

# Problem: 2185. Counting Words With A Given Prefix

## Description
To find the number of words in an array that had a given prefix.

## Approach / Thoughts
Iterate through every word in the array and see if the index was 0. If it was, increment a counter.

## Solution
```java
class Solution {
    public int prefixCount(String[] words, String pref) {
        int count = 0;
        for (String str : words) {
            if (str.indexOf(pref) == 0) {
                count++;
            }
        }
        return count;
    }
}
```
