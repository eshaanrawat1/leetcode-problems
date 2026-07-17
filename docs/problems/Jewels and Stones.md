---
date: 2023-08-27
difficulty: Easy
num: 771
related_topics:
  - Hash Table
  - String
return: Done
---

# Problem: 771. Jewels And Stones

## Description
Given two strings jewels and stones with letters in each, find how many jewels are in the stones.

**Example 1:**

```Plain
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
```

## Approach / Thoughts
My approach was to use a two pass hashtable. The first pass would go through the stones string and add all of the characters to the hashmap with their frequency.

The second pass would go through jewels. If a char in jewels matched what we have in stones, the frequency of that jewel is added to a counter which is then returned.

## Solution
```java
class Solution {
    public int numJewelsInStones(String jewels, String stones) {

        HashMap<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < stones.length(); i++){
            if (!map.containsKey(stones.charAt(i))) {
                map.put(stones.charAt(i), 1);
            }
            else {
                map.put(stones.charAt(i), map.get(stones.charAt(i)) + 1);
            }
        }

        int counter = 0;
        for (int j = 0; j < jewels.length(); j++) {
            if (map.containsKey(jewels.charAt(j))) {
                counter += map.get(jewels.charAt(j));
            }
        }

        return counter;
    }
}
```
