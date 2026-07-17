---
date: 2023-08-10
difficulty: Easy
num: 1189
related_topics:
  - Counting
  - Hash Table
  - String
return: Done
---

# Problem: 1189. Maximum Number Of Balloons

## Description
Given a string, find the number of times you can make the word balloon. Each letter can only be used once.

## Approach / Thoughts
My approach was to use something similar to a bucket sort. This was to count the number of times each letter occurred using a switch statement and a for loop. The way this was done was by converting the string to a char array.

After that, there were two variables to find the minimum frequency. One was for the letters that appeared twice like ‘l’ and ‘o’ and the other was for the other letters. After finding the mins, the min of the single and double was returned.

## Solution
```java
class Solution {
    public int maxNumberOfBalloons(String text) {
        
        int b = 0, a = 0, l = 0, o = 0, n = 0;
        for (char ch : text.toCharArray()) {
            switch(ch) {
                case 'b': 
                    b++;
                    break;
                case 'a': 
                    a++;
                    break;
                case 'l': 
                    l++;
                    break;
                case 'o': 
                    o++;
                    break;
                case 'n': 
                    n++;
                    break;
            }
        }

        int dubMin = Math.min(l/2,o/2);
        int singMin = Math.min(b, Math.min(a,n));
        return Math.min(dubMin, singMin);
    }
}
```
