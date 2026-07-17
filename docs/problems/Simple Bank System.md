---
date: 2025-10-26
difficulty: Medium
num: 2043
related_topics:
  - Array
  - Design
  - Hash Table
  - Simulation
return: Done
---

# Problem: 2043. Simple Bank System

## Description

## Approach / Thoughts
same

## Solution
```python
class Bank:

    def __init__(self, balance: List[int]):
        self.accounts = balance
        
    def _valid(self, ac):
        return 0 <= ac < len(self.accounts)

    def transfer(self, account1: int, account2: int, money: int) -> bool:
        ac1 = account1 - 1
        ac2 = account2 - 1

        if not (self._valid(ac1) and self._valid(ac2)):
            return False

        if self.accounts[ac1] >= money:
            self.accounts[ac1] -= money
            self.accounts[ac2] += money
            return True
        
        return False

    def deposit(self, account: int, money: int) -> bool:
        ac = account - 1

        if not self._valid(ac):
            return False

        self.accounts[ac] += money
        return True

    def withdraw(self, account: int, money: int) -> bool:
        ac = account - 1

        if not self._valid(ac):
            return False

        if self.accounts[ac] < money:
            return False

        self.accounts[ac] -= money
        return True


# Your Bank object will be instantiated and called as such:
# obj = Bank(balance)
# param_1 = obj.transfer(account1,account2,money)
# param_2 = obj.deposit(account,money)
# param_3 = obj.withdraw(account,money)
```
