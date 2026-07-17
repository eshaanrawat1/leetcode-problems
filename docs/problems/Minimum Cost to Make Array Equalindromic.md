---
date: 2026-05-19
difficulty: Medium
num: 2967
related_topics:
  - Array
  - Math
  - Binary Search
  - Greedy
  - Sorting
return:
---

# Problem: 2967. Minimum Cost to Make Array Equalindromic

## Description
You are given a **0-indexed** integer array `nums` having length `n`.

You are allowed to perform a special move **any** number of times (**including zero**) on `nums`. In one **special** **move** you perform the following steps **in order**:

	Choose an index `i` in the range `[0, n - 1]`, and a **positive** integer `x`.

	Add `|nums[i] - x|` to the total cost.

	Change the value of `nums[i]` to `x`.

A **palindromic number** is a positive integer that remains the same when its digits are reversed. For example, `121`, `2552` and `65756` are palindromic numbers whereas `24`, `46`, `235` are not palindromic numbers.

An array is considered **equalindromic** if all the elements in the array are equal to an integer `y`, where `y` is a **palindromic number** less than `109`.

Return *an integer denoting the **minimum** possible total cost to make *`nums`* **equalindromic** by performing any number of special moves.*

## Approach / Thoughts
normal - minimize ops means find median 
find palindrome closest to the median (left and right)
even if palindromes are sparse - still fits constraints

## Solution
```python
class Solution:
    def minimumCost(self, nums: List[int]) -> int:
        
        def is_pal(x):
            s = str(x)
            return s == s[::-1]

        nums.sort()
        n = len(nums)

        if n & 1:
            med = nums[n//2]
        else:
            med = nums[n//2-1] + nums[n//2]
            med /= 2

        def find():
            l = int(med)
            r = int(med)

            while l > 0:
                if is_pal(l):
                    break
                l -= 1

            max_val = 10**9+1
            while r < max_val:
                if is_pal(r):
                    break
                r += 1

            return l, r

        
        l, r = find()
        return min(
            sum(abs(x-l) for x in nums),
            sum(abs(x-r) for x in nums)
        )
```