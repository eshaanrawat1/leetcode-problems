---
date: "2026-07-01"
difficulty: "Hard"
rating: 2235
num: "3715"
related_topics:
  - "array"
  - "hash-table"
  - "math"
  - "tree"
  - "depth-first-search"
  - "counting"
  - "number-theory"
  - "perfect-squares"
  - "square-kernel"
  - "prime-factorization"
  - "tree-rooting"
  - "parity"
return: review
---

# Problem: 3715. Sum of Perfect Square Ancestors

## Approach / Thoughts

The easy part of the problem was doing tree rooting and keeping track of ancestors - initially i thought we could either iterate over every ancestor or ever perfect squares - but each iteration was O(n) so this didn’t work. the hardest part of the problem was arriving at the square kernel trick - or basically how do we know two numbers multiplied by each other result in a perfect square. it has to do with the parity of exponents. lets enumerate some perfect squares and their factors 
4 - 2^2
9 - 3^2
16 - 2^4
25 - 5^2
36 - 2^2 * 3^2
49 - 7^2
64 - 2 ^ 8 …
the general pattern is that every perfect square has all prime factors to an even exponent. this makes sense because say we have a^2k * b^2m * c ^ 2n …
then the perfect square would obviously be (a^k * b^m *c^n) ^2. so two find two numbers that make a perfect square, only the parity of their prime factorization exponents matter. 
in a case like sqrt((2^2 * 5^2 * 7) * (2^4 * 3^2 * 7)), we can safely get rid of all exponents with an even parity - because if it’s even that means the same amount can be distributed to the left and right sides (ie creating the perfect square). all that remains is the odd exponents. if the odd exponents are exactly the same on both sides, we can create a perfect square since those and the other powers can be divided among two numbers equally. that’s also why we can precompute the square kernel - if an exponent is even, then even + even = even -> it doesn’t change the final output, only the odd parities do.

## Solution

```python
class Solution:
    def sumOfAncestors(self, n, edges, nums):
        # 42:48
        # intuition - can use some sort of tree traverse
        # maybe precompute perfect squares
        # since nums[i] <= 10^5, its only 316 possible squares

        # construct the tree
        # for each child, keep track of a map of seen numbers
        # iterate over perfect squares to see if sq / nums[i] in map

        # cant precompute perfect squares since nums[i] * nums[i]
        # could be a lot bigger than 10^5
        # maybe try iterating over ancestors - but worst case
        # quadratic if tree is a linked list

        # try precomputing perfect squares again
        # store list of factors f -> psq so for each cand
        # we only iterate over possible perfect squares
        # cant do this - big number sqrt is 10^5

        # hint 1 - square free kernel - can precompute that
  

        def prime_factor(x):
            factors = Counter()
            for f in range(2, int(sqrt(x)+1)+1):
                while x % f == 0:
                    factors[f] += 1
                    x //= f

            res = x
            for f, v in factors.items():
                if v & 1:
                    res *= f
            return res

        sq_kernel = {x : prime_factor(x) for x in nums}

        adj = defaultdict(list)
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)

        self.res = 0
        seen = Counter()

        def dfs(root, par):
            vk = sq_kernel[nums[root]]
            self.res += seen[vk]
            
            for nei in adj[root]:
                if nei == par:
                    continue 

                seen[vk] += 1
                dfs(nei, root)
                seen[vk] -= 1
        
        dfs(0, -1)
        return self.res
```
