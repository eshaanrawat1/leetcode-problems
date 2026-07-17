---
date: 2024-10-17
difficulty: Hard
num: 1206
related_topics:
  - Design
  - Linked List
return: Done
---

# Problem: 1206. Design Skiplist

## Description

## Approach / Thoughts
keep track of pointers

## Solution
```python
def coin_flip():
    return random.choice([0, 1])

class Node:
    def __init__(self, val):
        self.val = val

        self.left = None
        self.right = None
        self.up = None
        self.down = None

class Skiplist:

    def __init__(self):
        self.num_layers = 2

        self.tl = Node(float("-inf"))
        self.tr = Node(float("inf"))

        self.bl = Node(float("-inf"))
        self.br = Node(float("inf"))

        self.tl.right = self.tr
        self.tl.down = self.bl

        self.tr.left = self.tl
        self.tr.down = self.br

        self.bl.right = self.br
        self.bl.up = self.tl

        self.br.left = self.bl
        self.br.up = self.tr
        

    def search(self, target: int) -> bool:
        cur = self.tl

        while cur:
            while cur.right and cur.right.val <= target:
                cur = cur.right

            if cur.down:
                cur = cur.down
            else:
                break

        return cur and cur.val == target


    def _find_insert_location(self, key):
        cur = self.tl

        while cur:
            while cur.right and cur.right.val < key:
                cur = cur.right

            if cur.down:
                cur = cur.down
            else:
                break

        return cur
        

    def add(self, num: int) -> None:
        cur_layer = 1

        prev = self._find_insert_location(num)
        nxt = prev.right

        new_node = Node(num)
        prev.right = new_node
        new_node.left = prev
        nxt.left = new_node
        new_node.right = nxt

        while coin_flip():
            if cur_layer + 1 == self.num_layers:
                tmp = Node(num)
                new_node.up = tmp
                tmp.down = new_node

                # fill in new node in top layer
                self.tl.right = tmp
                self.tr.left = tmp
                tmp.left = self.tl
                tmp.right = self.tr

                # add new layer
                tmp_tl = Node(float("-inf"))
                tmp_tr = Node(float("inf"))

                self.tl.up = tmp_tl
                self.tr.up = tmp_tr

                tmp_tl.down = self.tl
                tmp_tr.down = self.tr

                self.tl = self.tl.up
                self.tr = self.tr.up

                self.tl.right = self.tr
                self.tr.left = self.tl

                # update boundaries
                self.num_layers += 1
                cur_layer += 1
                new_node = tmp
            else:
                prev = None
                tmp_cur = new_node

                while tmp_cur:
                    tmp_cur = tmp_cur.left
                    if tmp_cur.up:
                        prev = tmp_cur.up
                        break

                nxt = prev.right

                tmp = Node(num)
                prev.right = tmp
                nxt.left = tmp

                tmp.left = prev
                tmp.right = nxt

                tmp.down = new_node
                new_node.up = tmp

                cur_layer += 1
                new_node = tmp



    def erase(self, num: int) -> bool:
        if not self.search(num):
            return False

        cur = self.tl

        while cur:
            while cur.right and cur.right.val <= num:
                cur = cur.right
            
            if cur.down:
                cur = cur.down
            else:
                break

        while cur:
            prev = cur.left
            nxt = cur.right

            prev.right = nxt
            nxt.left = prev

            cur = cur.up
        return True
```
