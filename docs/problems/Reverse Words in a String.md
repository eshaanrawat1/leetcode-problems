---
date: 2024-01-19
difficulty: Medium
num: 151
related_topics:
  - String
  - Two-Pointer
return: Done
---

# Problem: 151. Reverse Words In A String

## Description
Reverse all words in a string

## Approach / Thoughts
1. Strip all spaces and split elements by string words

1. If the element is not empty, add it to a new array

1. Reverse words in new array with two pointers

1. Iterate through new array and add words to a string, with space at the end

1. Return new string with rstrip to get rid of last space

## Solution
```python
class Solution:
    def reverseWords(self, s: str) -> str:
				# strip space and split string
        arr = s.strip().split(' ')
        
				# add non-empty elements to new list
        res = []
        for element in arr:
            if element:
                res.append(element)

				# reverse elements
        left, right = 0, len(res) - 1
        while left < right:
            res[left], res[right] = res[right], res[left]
            left += 1
            right -=1

        # concatenate with spaces 
        ans = ''
        for element in res:
            ans += element + ' '
        return ans.rstrip()
```
