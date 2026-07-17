---
date: 2023-07-27
difficulty: Easy
num: 412
related_topics:
  - Math
  - Simulation
  - String
return: Done
---

# Problem: 412. Fizz Buzz

## Description
This problem was interesting. Basically, it just added a bunch of conditions based on what number it was. For example, if the number was 10, we consider all the numbers from 1 to 10. If those numbers were divisible by 5 or 3, certain words would be added to a list.

## Approach / Thoughts
My approach was to just have a bunch of if and else if statements to test the divisibility rules. When it was not divisible, I converted to the int to a string using the toString method and just added it to the string list.

## Solution
```java
class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> list = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                list.add("FizzBuzz");
            }
            else if (i % 3 == 0) {
                list.add("Fizz");
            }
            else if (i % 5 == 0) {
                list.add("Buzz");
            }
            else {
                String b = Integer.toString(i);
                list.add(b);
            }
        }
        return list;
    }
}
```
