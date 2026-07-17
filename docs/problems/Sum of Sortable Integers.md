---
date: 2026-04-02
difficulty: Hard
num: 3886
related_topics:
  - Array
return:
---

# Problem:  

## Description
You are given an integer array `nums` of length `n`.

An integer `k` is called **sortable** if `k` **divides** `n` and you can sort `nums` in **non-decreasing** order by sequentially performing the following operations:

- Partition `nums` into **consecutive subarrays** of length `k`.
- **Cyclically rotate each subarray independently** any number of times to the left or to the right.

Return an integer denoting the sum of all possible sortable integers `k`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
check relative ordering for each subarray (can it be cyclically sorted - 1 dip)
check global ordering - sort each subarray and rejoin

## Solution
```python
class Solution:
    def sortableIntegers(self, nums: list[int]) -> int:
        n = len(nums)
        sorted_nums = sorted(nums)
        
        factors = []
        for i in range(1, int(sqrt(n))+1):
            if n % i == 0:
                factors.append(i)
                if i != n // i:
                    factors.append(n//i)

        def check(k):
            subs = [nums[i:i+k] for i in range(0, n, k)]      
            tmp = []

            for s in subs:
                dips = 0
                for j in range(k):
                    cur = s[j]
                    nxt = s[(j+1)%k]
                    if nxt < cur:
                        dips += 1
                if dips > 1:
                    return False
                tmp.extend(sorted(s))
            return tmp == sorted_nums

        res = [f for f in factors if check(f)]
        return sum(res) if res else 0
        
# string solution
class Solution:
    def sortableIntegers(self, nums: list[int]) -> int:
        n = len(nums)
        sorted_nums = sorted(nums)
        
        factors = []
        for i in range(1, int(sqrt(n))+1):
            if n % i == 0:
                factors.append(i)
                if i != n // i:
                    factors.append(n//i)

        def check(k):
            for i in range(0, n, k):
                sub = [str(x) for x in nums[i:i+k]]
                target = [str(x) for x in sorted_nums[i:i+k]]

                if ','.join(target) not in ','.join(sub+sub):
                    return False
            return True

        res = [f for f in factors if check(f)]
        return sum(res) if res else 0
