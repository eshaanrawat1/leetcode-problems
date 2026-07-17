---
date: 2025-12-20
difficulty: Medium
num: 2555
related_topics:
  - Array
  - Binary Search
  - Sliding Window
return: Done
---

# Problem: 2555. Maximize Win From Two Segments

## Description
same, choose 2 non overlapping segments with most prizes

## Approach / Thoughts
binary search / prefix sums - each prize is worth 1

for each starting index, how far right can i go

choose second nonoverlapping segment to max score

## Solution
```python
class Solution:
    def maximizeWin(self, P: List[int], k: int) -> int:
        # non dec - immediately binary search or greedy 
        # segments, line sweep?
        # length of segment must be k?

        # each prize is worth 1 can be dupes which are more valuable 
        # cant enumerate every k length, 10^9 
        # must be linear or nlgn / nrootn

        # only 2 segments 
        
        # 1 1 2 2 3 3 5
        # 1,2  2,2  3,2  5,1
        # never benefical for segments to intersect 

        # starting at a left cand, how many points can i get if i start here 
        # use prefix sum 


        # 1,2  2,2  3,2  5,1

        #   1    2    3    5
        #   2    4    6    7 

        # build data structures
        cnt = Counter(P)
        pairs = [(k,v) for k,v in cnt.items()]

        n = len(pairs)

        idxs = [x[0] for x in pairs]
        ps = [x[1] for x in pairs]

        index_map = {}
        for i, ii in enumerate(idxs):
            index_map[ii] = i

        for i in range(1, n):
            ps[i] += ps[i-1]

        #   1    2    3    5
        #   2    4    6    7 

        #   0    1    2    3


        # 1 2
        # 2 3
        # 3 3
        # 5 4

        # binary search left cands 
        starts = Counter()
        for seg_start in idxs:
            seg_end_idx = bisect_left(idxs, seg_start+k)
            if seg_start+k not in cnt: seg_end_idx -= 1
            seg_end_idx = min(n-1, seg_end_idx)

            seg_end = idxs[seg_end_idx]

            lps = index_map[seg_start]
            rps = index_map[seg_end]
            v = ps[lps-1] if lps != 0 else 0

            score = ps[rps] - v
            starts[seg_start] = score 

        # Counter({1: 6, 2: 4, 3: 3, 5: 1})

        # 1 2 3 5
        # 6 4 3 1 

        max_seg_score_after = {idxs[-1]: starts[idxs[-1]]}
        for i in range(n-2, -1, -1):
            seg_start = idxs[i]
            max_seg_score_after[seg_start] = max(
                starts[seg_start],
                starts[idxs[i+1]],
                max_seg_score_after[idxs[i+1]]
            )

        # get max len of two segs
        res = 0
        for seg_start in starts:
            seg_end_idx = bisect_right(idxs, seg_start+k)
            seg_end_idx = min(n-1, seg_end_idx)

            seg_end = idxs[seg_end_idx]
            if seg_start <= seg_end <= seg_start + k:
                res = max(res, starts[seg_start])
                continue

            # print(seg_start, seg_end, starts[seg_start] + max_seg_score_after[seg_end])
            res = max(res, starts[seg_start] + max_seg_score_after[seg_end])
        return res
```
