---
date: 2023-07-27
difficulty: Easy
num: 58
related_topics:
  - String
return: Done
---

# Problem: 58. Length Of Last Word

## Description
This problem was to return the length of the last word in the string.

## Approach / Thoughts
My original approach was to have a while loop that ran the entire length of the string (this was just in case the string only had spaces and one word in it). There were certain conditions, such as if the counter was 0 and there was a space, keep going since that means it was a space at the beginning. Once the counter started getting the length of the word, any spaces after is a time to break the loop.

## Solution
```java
class Solution {
    public int lengthOfLastWord(String s) {
        int count = 0;
        int i = s.length() - 1;

        while (i >=0) {
            if (s.substring(i,i+1).equals(" ") && count == 0) {
                // do nothing
            }
            else if (s.substring(i,i+1).equals(" ") && count != 0) {
                return count;
            }
            else {
                count++;
            }
            i--;
        }
        return count;
    }
}
```
