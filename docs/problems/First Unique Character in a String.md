---
date: 2023-08-07
difficulty: Easy
num: 387
related_topics:
  - Counting
  - Hash Table
  - Queue
  - String
return: Done
---

# Problem: 387. First Unique Character In A String

## Description
To find the index of the first unique character in a string.

## Approach / Thoughts
My approach was to use a two pass hashtable. In the hashmap, the first pass would add all the letters as keys with their values as 1. If there was a duplicate, that value is automatically flipped to -1.

The second pass would iterate through the letters and the first letter where the value is not -1 has the index returned.

## Solution
```java
class Solution {
    public int firstUniqChar(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            if (map.containsKey(s.charAt(i))) {
                map.put(s.charAt(i), -1);
            }
            else {
                map.put(s.charAt(i), 1);
            }
        }

        for (int j = 0; j < s.length(); j++) {
            if (map.get(s.charAt(j)) != -1) {
                return s.indexOf(s.substring(j,j+1));
            }
        }
        return -1;
    }
}
```
