---
date: 2023-07-13
difficulty: Easy
num: 28
related_topics:
  - String
  - String Matching
  - Two-Pointer
return: Review
---

# Problem: 28. Find The Index Of The First Occurrence In A String

## Description
The problem was to find the index of the first occurrence of the string needle in haystack.

## Approach / Thoughts
It was a very easy problem. At first, I overthought the problem by trying to put each individual letter in an array index, but then I just used the indexOf method.

## Solution
```java
class Solution {
    public int strStr(String haystack, String needle) {
        
        return(haystack.indexOf(needle));
    }
}
```
