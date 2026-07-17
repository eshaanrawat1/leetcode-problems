---
date: 2025-05-24
difficulty: Medium
num: 2131
related_topics:
  - Array
  - Counting
  - Greedy
  - Hash Table
  - String
return: Done
---

# Problem: 2131. Longest Palindrome By Concatenating Two Letter Words

## Description

## Approach / Thoughts
consider distinct letter palindromes, need corresponding pair

same letter palindromes can go in the middle

## Solution
```python
class Solution:
    def longestPalindrome(self, words: List[str]) -> int:
        same = Counter()
        diff = Counter()

        for w in words:
            c1, c2 = w
            if c1 == c2:
                same[w] += 1
            else:
                diff[w] += 1

        cnt_same = mid = 0
        for w in same:
            c1, c2 = w
            if c1 != c2:
                continue 

            if same[w] % 2 == 1:
                cnt_same += 2 * (same[w] - 1)
                mid += 1
            else:
                cnt_same += 2 * same[w]
        cnt_same += 2 * (mid >= 1)

        cnt_diff = 0
        diff_words = [w for w in diff]
        for w in diff_words:
            c1, c2 = w
            if c1 == c2:
                continue

            s1 = c1 + c2
            s2 = c2 + c1

            if s1 in diff and s2 in diff:
                max_cnt = min(diff[s1], diff[s2])
                cnt_diff += 4 * max_cnt
                del diff[s1]
                del diff[s2]

        return (cnt_same + cnt_diff)
```
