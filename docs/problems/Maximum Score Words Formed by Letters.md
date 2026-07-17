---
date: 2024-05-23
difficulty: Hard
num: 1255
related_topics:
  - Array
  - Backtracking
  - Bit Manipulation
  - Bitmask
  - Dynamic Programming
  - String
return: Done
---

# Problem: 1255. Maximum Score Words Formed By Letters

## Description
count possible words and max score

## Approach / Thoughts
dfs take possible words and keep track of available letters

## Solution
```python
class Solution:
    def maxScoreWords(self, words: List[str], letters: List[str], score: List[int]) -> int:
        freq = [0] * 26
        for ch in letters:
            freq[ord(ch)-ord('a')] += 1

        self.count = 0
        def dfs(i, cur_score, available):
            if i == len(words):
                self.count = max(self.count, cur_score)
                return

            # take word if possible 
            cpy = available[:]
            check, tmp = True, 0
            for ch in words[i]:
                letter = ord(ch)-ord('a')
                if cpy[letter] > 0:
                    tmp += score[letter]
                    cpy[letter] -= 1
                else:
                    check = False
                    break
            
            if check:
                cur_score += tmp
                dfs(i+1, cur_score, cpy)
                cur_score -= tmp

            # skip word
            dfs(i+1, cur_score, available)
        dfs(0, 0, freq)
        return self.count
```
