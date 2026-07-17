---
date: 2023-08-02
difficulty: Easy
num: 136
related_topics:
  - Array
  - Bit Manipulation
return: Done
---

# Problem: 136. Single Number

## Description
The problem was, given an array filled with duplicates, there was one unique number. Find and return that unique number.

## Approach / Thoughts
My approach was to use a hashmap with a key and value. This was a two pass hash map. The first iteration would add values with the counter 1. If the value added was a repeat, the counter would increment.

At the end of the iteration, every key should have a value of 2 except one.

Then, I used a for each loop to iterate the hashmap. If the value was 1, the loop would return the given key.

## Solution
```java
class Solution {
    public int singleNumber(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i : nums) {
            if (!map.containsKey(i)) {
                map.put(i, 1);
            }
            else {
                map.put(i, map.get(i) + 1);
            }
        }

        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() == 1) {
                return entry.getKey();
            }
        }

        return -1;
    }
}
```
