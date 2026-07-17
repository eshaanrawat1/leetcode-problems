---
date: 2023-07-17
difficulty: Easy
num: 1768
related_topics:
  - String
  - Two-Pointer
return: Done
---

# Problem: 1768. Merge Strings Alternately

## Description
The problem was to take two strings and alternately merge them. For example the strings abc and pqr would merge to be apbqcr.

## Approach / Thoughts
My approach took a few tries but I thought that it was pretty straightforward once I got the calculations down. I used for loops to traverse through both strings and alternately merge them. I also had different conditions based on how long the strings were such as alternating, then adding whatever characters are leftover.

## Solution
```java
class Solution {
    public String mergeAlternately(String word1, String word2) {
        
        int w1 = word1.length();
        int w2 = word2.length(); 

        String s = "";

        if (w1 > w2) {
            for (int i = 0; i < w2; i++) {
                s += word1.charAt(i);
                s += word2.charAt(i);
            }

            for (int j = w2; j < w1; j++){
                s += word1.charAt(j);
            }
        }

        else if (w2 > w1) {
            for (int i = 0; i < w1; i++) {
                s += word1.charAt(i);
                s += word2.charAt(i);
            }

            for (int j = w1; j < w2; j++) {
                s += word2.charAt(j);
            }
        }

        else {
            for (int i = 0; i < w1; i++) {
                    s += word1.charAt(i);
                    s += word2.charAt(i);
                }
        }
        
      return s;  

    }
}
```
