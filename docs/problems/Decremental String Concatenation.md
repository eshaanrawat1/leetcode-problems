---
date: 2026-05-20
difficulty: Medium
num: 2746
related_topics:
  - Array
  - String
  - Dynamic Programming
return:
---

# Problem: 2746. Decremental String Concatenation

## Description
You are given a **0-indexed** array `words` containing `n` strings.

Let's define a **join** operation `join(x, y)` between two strings `x` and `y` as concatenating them into `xy`. However, if the last character of `x` is equal to the first character of `y`, one of them is **deleted**.

For example `join("ab", "ba") = "aba"` and `join("ab", "cde") = "abcde"`.

You are to perform `n - 1` **join** operations. Let `str0 = words[0]`. Starting from `i = 1` up to `i = n - 1`, for the `ith` operation, you can do one of the following:

	Make `stri = join(stri - 1, words[i])`

	Make `stri = join(words[i], stri - 1)`

Your task is to **minimize** the length of `strn - 1`.

Return *an integer denoting the minimum possible length of* `strn - 1`.

## Approach / Thoughts
concat in order - keep track of first and last 

## Solution
```python
class Solution:
    def minimizeConcatenatedLength(self, words: List[str]) -> int:
        n = len(words)

        @lru_cache(None)
        def dfs(i, f, l):
            if i >= n:
                return 0

            w = words[i]

            if f == '$' or l == '$':
                return len(w) + dfs(i+1, w[0], w[-1])

            pv = -1 if w[-1] == f else 0
            pre = len(w) + pv + dfs(i+1, w[0], l)

            sv = -1 if w[0] == l else 0
            suf = len(w) + sv + dfs(i+1, f, w[-1])
            
            return min(pre, suf)

        return dfs(0, '$', '$')
```