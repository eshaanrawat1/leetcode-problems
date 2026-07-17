---
date: 2025-03-30
difficulty: Medium
num: 3305
related_topics:
  - Hash Table
  - Sliding Window
  - String
return: Done
---

# Problem: 3305. Count Of Substrings Containing Every Vowel And K Consonants I

## Description
same as 3306, easier constraints

## Approach / Thoughts
same, sliding window k - (k - 1) at most

## Solution
```python
class Solution:
    def countOfSubstrings(self, word: str, k: int) -> int:
        
        def at_most(x):
            l = cons = res = 0
            vowels = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0}

            for r, c in enumerate(word):
                if c in vowels:
                    vowels[c] += 1
                else:
                    cons += 1

                while all(vowels.values()) and cons > x:
                    if word[l] in vowels:
                        vowels[word[l]] -= 1
                    else:
                        cons -= 1
                    l += 1
                res += (r - l + 1)
            return res
            
        return at_most(k) - at_most(k-1)
```
