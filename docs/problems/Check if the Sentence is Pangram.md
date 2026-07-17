---
date: 2023-07-21
difficulty: Easy
num: 1832
related_topics:
  - Hash Table
  - String
return: Done
---

# Problem: 1832. Check If The Sentence Is Pangram

## Description
The problem was to see if the given string was a pangram, that means whether it contains every letter in the alphabet.

## Approach / Thoughts
My approach was using a hashset which is good for sorting out duplicates. In a hashset, once all the characters are added, the size should be 26 which is the size of the alphabet. I used a string hashset and traversed through the sentence and added each letter via substring.

## Solution
```java
class Solution {
    public boolean checkIfPangram(String sentence) {
        
        HashSet<String> check = new HashSet<String>();
        for (int i = 0; i < sentence.length(); i++) {
            String s = sentence.substring(i,i+1);
            check.add(s);
        }

        return (check.size() == 26);
    }
}
```
