---
date: 2023-08-23
difficulty: Easy
num: 2828
related_topics:
  - Array
  - String
return: Done
---

# Problem: 2828. Check If A String Is An Acronym Of Words

## Description
To check if the array of words were an acronym of a string.

Ex: apple, bat, cat = “abc”

## Approach / Thoughts
To just iterate through the list and see if the first character of each word matched the character in the string. Pretty easy problem, just had to figure out how to write the code effectively.

## Solution
```java
class Solution {
    public boolean isAcronym(List<String> words, String s) {
        
        if (words.size() != s.length()) {return false;}
        
        for (int i = 0; i < words.size(); i++) {
            if (!words.get(i).substring(0,1).equals(s.substring(i,i+1))) {
                return false;
            }
        }
        return true;
    }
}
```
