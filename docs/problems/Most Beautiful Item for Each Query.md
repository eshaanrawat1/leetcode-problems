---
date: 2024-11-11
difficulty: Medium
num: 2070
related_topics:
  - Array
  - Binary Search
  - Sorting
return: Done
---

# Problem: 2070. Most Beautiful Item For Each Query

## Description
max score up to this price for each query

## Approach / Thoughts
keep running max after sorting by price

binary search to find query

## Solution
```python
class Solution:
    def maximumBeauty(self, items: List[List[int]], queries: List[int]) -> List[int]:
        beauty_price = defaultdict(int)
        for p, b in items:
            beauty_price[p] = max(beauty_price[p], b)

        arr = [[p, b] for p, b in beauty_price.items()]
        arr.sort(key = lambda x: (x[0], x[-1]))
        for i in range(1, len(arr)):
            arr[i][1] = max(arr[i][1], arr[i-1][1])
        arr_p = [i[0] for i in arr]

        def find(q):
            l, r = 0, len(arr) - 1
            cur_max = float("-inf")

            while l <= r:
                m = (l + r) // 2

                if arr_p[m] == q:
                    return arr[m][1]
                elif arr_p[m] < q:
                    l = m + 1
                    cur_max = max(cur_max, arr[m][1])
                else:
                    r = m - 1
            return cur_max

        res = []
        for q in queries:
            if q < arr_p[0]:
                res.append(0)
            elif q > arr_p[-1]:
                res.append(arr[-1][1])
            else:
                res.append(find(q))
        return res
```
