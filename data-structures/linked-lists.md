# Linked Lists - Interview Questions and Answers

## Table of Contents
1. [Reverse a Linked List](#1-reverse-a-linked-list)
2. [Detect Cycle in Linked List](#2-detect-cycle-in-linked-list)
3. [Find Middle of Linked List](#3-find-middle-of-linked-list)
4. [Merge Two Sorted Lists](#4-merge-two-sorted-lists)
5. [Remove Nth Node from End](#5-remove-nth-node-from-end)
6. [Intersection of Two Linked Lists](#6-intersection-of-two-linked-lists)
7. [Add Two Numbers Represented as Linked Lists](#7-add-two-numbers-represented-as-linked-lists)
8. [Clone a Linked List with Random Pointer](#8-clone-a-linked-list-with-random-pointer)

---

## Linked List Node Definition

Before diving into problems, here's the standard node definition we'll use:

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```

```javascript
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
```

```java
public class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}
```

---

## 1. Reverse a Linked List

**Question:** Given the head of a singly linked list, reverse the list and return the reversed list's head.

**Example:**
```
Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL
```

**Detailed Answer:**

### Approach 1: Iterative (Three Pointers)

The iterative approach uses three pointers to reverse the links between nodes.

```python
def reverseList(head):
    """
    Iterative approach to reverse a linked list
    Time: O(n), Space: O(1)
    """
    prev = None
    current = head
    
    while current is not None:
        # Store next node
        next_node = current.next
        
        # Reverse the link
        current.next = prev
        
        # Move prev and current one step forward
        prev = current
        current = next_node
    
    # prev is now the new head
    return prev
```

**Time Complexity:** O(n) - Visit each node once  
**Space Complexity:** O(1) - Only use three pointers

### Approach 2: Recursive Solution

The recursive approach reverses the rest of the list first, then fixes the current node's links.

```python
def reverseList(head):
    """
    Recursive approach to reverse a linked list
    Time: O(n), Space: O(n) due to recursion stack
    """
    # Base cases
    if head is None or head.next is None:
        return head
    
    # Reverse the rest of the list
    new_head = reverseList(head.next)
    
    # Fix the links
    head.next.next = head
    head.next = None
    
    return new_head
```

**Time Complexity:** O(n) - Visit each node once  
**Space Complexity:** O(n) - Recursion call stack

### Example Walkthrough (Iterative):

```
Initial: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
prev = None, current = 1

Step 1: 
  next_node = 2
  1.next = None (point to prev)
  prev = 1, current = 2
  Result: None <- 1    2 -> 3 -> 4 -> 5 -> NULL

Step 2:
  next_node = 3
  2.next = 1 (point to prev)
  prev = 2, current = 3
  Result: None <- 1 <- 2    3 -> 4 -> 5 -> NULL

Step 3:
  next_node = 4
  3.next = 2 (point to prev)
  prev = 3, current = 4
  Result: None <- 1 <- 2 <- 3    4 -> 5 -> NULL

Step 4:
  next_node = 5
  4.next = 3 (point to prev)
  prev = 4, current = 5
  Result: None <- 1 <- 2 <- 3 <- 4    5 -> NULL

Step 5:
  next_node = None
  5.next = 4 (point to prev)
  prev = 5, current = None
  Result: None <- 1 <- 2 <- 3 <- 4 <- 5

Return prev = 5 (new head)
Final: 5 -> 4 -> 3 -> 2 -> 1 -> NULL
```

### JavaScript Solution:

```javascript
// Iterative
function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    
    return prev;
}

// Recursive
function reverseListRecursive(head) {
    if (head === null || head.next === null) {
        return head;
    }
    
    const newHead = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
}
```

### Java Solution:

```java
// Iterative
public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode current = head;
    
    while (current != null) {
        ListNode nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    
    return prev;
}

// Recursive
public ListNode reverseListRecursive(ListNode head) {
    if (head == null || head.next == null) {
        return head;
    }
    
    ListNode newHead = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
}
```

### Key Insights:
- **Iterative approach** is more space-efficient and preferred in production
- **Recursive approach** is elegant but uses O(n) stack space
- The key is to carefully track three things: previous, current, and next nodes
- Don't lose reference to the rest of the list before reversing the link
- The new head is the last node of the original list

---

## 2. Detect Cycle in Linked List

**Question:** Given the head of a linked list, determine if the linked list has a cycle in it. A cycle exists if there is some node in the list that can be reached again by continuously following the next pointer.

**Example:**
```
Input: head = 3 -> 2 -> 0 -> -4 (where -4 points back to 2)
                    ^__________|
Output: true
```

**Detailed Answer:**

### Approach 1: Hash Set

Store visited nodes in a set. If we encounter a node we've seen before, there's a cycle.

```python
def hasCycle(head):
    """
    Hash set approach
    Time: O(n), Space: O(n)
    """
    visited = set()
    current = head
    
    while current is not None:
        if current in visited:
            return True
        visited.add(current)
        current = current.next
    
    return False
```

**Time Complexity:** O(n) - Visit each node at most once  
**Space Complexity:** O(n) - Store all nodes in the set

### Approach 2: Floyd's Cycle Detection (Tortoise and Hare)

Use two pointers moving at different speeds. If there's a cycle, they will eventually meet.

```python
def hasCycle(head):
    """
    Floyd's Cycle Detection Algorithm (Two Pointers)
    Time: O(n), Space: O(1)
    """
    if head is None or head.next is None:
        return False
    
    slow = head
    fast = head
    
    while fast is not None and fast.next is not None:
        slow = slow.next          # Move 1 step
        fast = fast.next.next     # Move 2 steps
        
        if slow == fast:
            return True
    
    return False
```

**Time Complexity:** O(n) - At most n iterations  
**Space Complexity:** O(1) - Only two pointers

### Finding the Cycle Start (Follow-up):

If you need to find where the cycle begins:

```python
def detectCycle(head):
    """
    Find the node where the cycle begins
    Returns the node or None if no cycle
    """
    if head is None or head.next is None:
        return None
    
    # Phase 1: Detect if cycle exists
    slow = fast = head
    has_cycle = False
    
    while fast is not None and fast.next is not None:
        slow = slow.next
        fast = fast.next.next
        
        if slow == fast:
            has_cycle = True
            break
    
    if not has_cycle:
        return None
    
    # Phase 2: Find cycle start
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next
    
    return slow
```

### Example Walkthrough:

```
List: 1 -> 2 -> 3 -> 4 -> 5 -> 6
                ^______________|

Initial: slow = 1, fast = 1

Step 1:
  slow = 2 (moved 1 step)
  fast = 3 (moved 2 steps)
  slow != fast

Step 2:
  slow = 3
  fast = 5
  slow != fast

Step 3:
  slow = 4
  fast = 3 (wrapped around due to cycle)
  slow != fast

Step 4:
  slow = 5
  fast = 5
  slow == fast → CYCLE DETECTED!
```

**Why does this work?**

Let's say:
- Distance from head to cycle start = a
- Distance from cycle start to meeting point = b
- Cycle length = c

When they meet:
- Slow traveled: a + b
- Fast traveled: a + b + nc (n complete cycles)
- Since fast moves 2x speed: 2(a + b) = a + b + nc
- Simplifying: a + b = nc
- Therefore: a = nc - b

This means the distance from head to cycle start equals the distance from meeting point to cycle start (going around the cycle).

### JavaScript Solution:

```javascript
function hasCycle(head) {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            return true;
        }
    }
    
    return false;
}

function detectCycle(head) {
    if (!head || !head.next) return null;
    
    let slow = head;
    let fast = head;
    let hasCycle = false;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            hasCycle = true;
            break;
        }
    }
    
    if (!hasCycle) return null;
    
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
}
```

### Java Solution:

```java
public boolean hasCycle(ListNode head) {
    if (head == null || head.next == null) {
        return false;
    }
    
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            return true;
        }
    }
    
    return false;
}

public ListNode detectCycle(ListNode head) {
    if (head == null || head.next == null) {
        return null;
    }
    
    ListNode slow = head;
    ListNode fast = head;
    boolean hasCycle = false;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    
    if (!hasCycle) return null;
    
    slow = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
}
```

### Key Insights:
- Floyd's algorithm is the optimal solution with O(1) space
- The "tortoise and hare" pattern is useful in many linked list problems
- Fast pointer moves 2x speed; if there's a cycle, it will eventually lap the slow pointer
- Mathematical proof shows why moving one pointer back to head finds the cycle start
- Always check for null/empty lists to avoid null pointer exceptions

---
## 3. Find Middle of Linked List

**Question:** Given the head of a singly linked list, return the middle node. If there are two middle nodes, return the second middle node.

**Example:**
```
Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
Output: 3 (node with value 3)

Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> NULL
Output: 4 (second middle node)
```

**Detailed Answer:**

### Approach 1: Two-Pass Solution

First pass counts the nodes, second pass goes to the middle.

```python
def middleNode(head):
    """
    Two-pass approach
    Time: O(n), Space: O(1)
    """
    # First pass: count nodes
    length = 0
    current = head
    while current:
        length += 1
        current = current.next
    
    # Second pass: go to middle
    middle_index = length // 2
    current = head
    for _ in range(middle_index):
        current = current.next
    
    return current
```

**Time Complexity:** O(n) - Two passes through the list  
**Space Complexity:** O(1) - Only a few variables

### Approach 2: Fast and Slow Pointers (Optimal)

Use two pointers: slow moves 1 step, fast moves 2 steps. When fast reaches the end, slow is at the middle.

```python
def middleNode(head):
    """
    Fast and slow pointer approach (optimal)
    Time: O(n), Space: O(1)
    """
    slow = head
    fast = head
    
    while fast is not None and fast.next is not None:
        slow = slow.next
        fast = fast.next.next
    
    return slow
```

**Time Complexity:** O(n) - Single pass through the list  
**Space Complexity:** O(1) - Only two pointers

### Example Walkthrough:

```
Odd length list: 1 -> 2 -> 3 -> 4 -> 5 -> NULL

Initial: slow = 1, fast = 1

Step 1:
  slow = 2 (moved 1)
  fast = 3 (moved 2)
  fast and fast.next not None, continue

Step 2:
  slow = 3 (moved 1)
  fast = 5 (moved 2)
  fast.next is None, stop

Return slow = 3


Even length list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> NULL

Initial: slow = 1, fast = 1

Step 1:
  slow = 2
  fast = 3
  continue

Step 2:
  slow = 3
  fast = 5
  continue

Step 3:
  slow = 4
  fast = None (moved past end)
  stop

Return slow = 4 (second middle)
```

### Variant: Return First Middle for Even Length

```python
def middleNodeFirstMiddle(head):
    """
    Returns first middle for even-length lists
    """
    if head is None or head.next is None:
        return head
    
    slow = head
    fast = head.next
    
    while fast is not None and fast.next is not None:
        slow = slow.next
        fast = fast.next.next
    
    return slow
```

### JavaScript Solution:

```javascript
function middleNode(head) {
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}

// First middle for even length
function middleNodeFirstMiddle(head) {
    if (!head || !head.next) return head;
    
    let slow = head;
    let fast = head.next;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}
```

### Java Solution:

```java
public ListNode middleNode(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}

public ListNode middleNodeFirstMiddle(ListNode head) {
    if (head == null || head.next == null) {
        return head;
    }
    
    ListNode slow = head;
    ListNode fast = head.next;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}
```

### Key Insights:
- Fast and slow pointer technique is optimal for finding the middle
- When fast pointer reaches the end, slow is at the middle
- For even-length lists, initialization determines which middle you get:
  - `fast = head` → second middle
  - `fast = head.next` → first middle
- This pattern appears in many problems (palindrome check, cycle detection, etc.)
- No need to know the length beforehand

---
## 4. Merge Two Sorted Lists

**Question:** Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

**Example:**
```
Input: 
  list1 = 1 -> 2 -> 4
  list2 = 1 -> 3 -> 4
Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4
```

**Detailed Answer:**

### Approach 1: Iterative with Dummy Node

Use a dummy node to simplify edge cases and build the merged list iteratively.

```python
def mergeTwoLists(list1, list2):
    """
    Iterative approach with dummy node
    Time: O(n + m), Space: O(1)
    """
    # Create a dummy node to simplify logic
    dummy = ListNode(0)
    current = dummy
    
    # Compare nodes from both lists
    while list1 is not None and list2 is not None:
        if list1.val <= list2.val:
            current.next = list1
            list1 = list1.next
        else:
            current.next = list2
            list2 = list2.next
        current = current.next
    
    # Attach remaining nodes
    if list1 is not None:
        current.next = list1
    if list2 is not None:
        current.next = list2
    
    return dummy.next
```

**Time Complexity:** O(n + m) where n and m are lengths of the two lists  
**Space Complexity:** O(1) - Only pointer manipulation, no new nodes created

### Approach 2: Recursive Solution

Recursively choose the smaller head and merge the rest.

```python
def mergeTwoLists(list1, list2):
    """
    Recursive approach
    Time: O(n + m), Space: O(n + m) due to call stack
    """
    # Base cases
    if list1 is None:
        return list2
    if list2 is None:
        return list1
    
    # Choose smaller head and recursively merge rest
    if list1.val <= list2.val:
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    else:
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
```

**Time Complexity:** O(n + m)  
**Space Complexity:** O(n + m) - Recursion call stack

### Example Walkthrough (Iterative):

```
list1 = 1 -> 2 -> 4 -> NULL
list2 = 1 -> 3 -> 4 -> NULL

Initial: dummy -> NULL, current = dummy

Step 1: Compare 1 and 1
  1 <= 1, choose list1
  dummy -> 1, current = 1
  list1 = 2 -> 4, list2 = 1 -> 3 -> 4

Step 2: Compare 2 and 1
  2 > 1, choose list2
  dummy -> 1 -> 1, current = 1 (second)
  list1 = 2 -> 4, list2 = 3 -> 4

Step 3: Compare 2 and 3
  2 <= 3, choose list1
  dummy -> 1 -> 1 -> 2, current = 2
  list1 = 4, list2 = 3 -> 4

Step 4: Compare 4 and 3
  4 > 3, choose list2
  dummy -> 1 -> 1 -> 2 -> 3, current = 3
  list1 = 4, list2 = 4

Step 5: Compare 4 and 4
  4 <= 4, choose list1
  dummy -> 1 -> 1 -> 2 -> 3 -> 4, current = 4
  list1 = NULL, list2 = 4

Step 6: list1 is NULL
  Attach remaining list2
  dummy -> 1 -> 1 -> 2 -> 3 -> 4 -> 4

Return dummy.next = 1 -> 1 -> 2 -> 3 -> 4 -> 4
```

### JavaScript Solution:

```javascript
// Iterative
function mergeTwoLists(list1, list2) {
    const dummy = new ListNode(0);
    let current = dummy;
    
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    current.next = list1 !== null ? list1 : list2;
    
    return dummy.next;
}

// Recursive
function mergeTwoListsRecursive(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    
    if (list1.val <= list2.val) {
        list1.next = mergeTwoListsRecursive(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoListsRecursive(list1, list2.next);
        return list2;
    }
}
```

### Java Solution:

```java
// Iterative
public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    
    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    current.next = (list1 != null) ? list1 : list2;
    
    return dummy.next;
}

// Recursive
public ListNode mergeTwoListsRecursive(ListNode list1, ListNode list2) {
    if (list1 == null) return list2;
    if (list2 == null) return list1;
    
    if (list1.val <= list2.val) {
        list1.next = mergeTwoListsRecursive(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoListsRecursive(list1, list2.next);
        return list2;
    }
}
```

### Key Insights:
- Dummy node eliminates special cases for empty lists or when choosing the head
- The iterative approach is preferred for its O(1) space complexity
- We're rearranging existing nodes, not creating new ones
- The pattern of comparing and choosing extends to merging k sorted lists
- Always handle the remaining nodes after one list is exhausted

---
## 5. Remove Nth Node from End

**Question:** Given the head of a linked list, remove the nth node from the end of the list and return its head.

**Example:**
```
Input: head = 1 -> 2 -> 3 -> 4 -> 5, n = 2
Output: 1 -> 2 -> 3 -> 5

Input: head = 1, n = 1
Output: NULL
```

**Detailed Answer:**

### Approach 1: Two-Pass Solution

First pass counts nodes, second pass removes the target node.

```python
def removeNthFromEnd(head, n):
    """
    Two-pass approach
    Time: O(L), Space: O(1) where L is list length
    """
    # First pass: count length
    length = 0
    current = head
    while current:
        length += 1
        current = current.next
    
    # Edge case: remove head
    if length == n:
        return head.next
    
    # Second pass: go to node before target
    current = head
    for _ in range(length - n - 1):
        current = current.next
    
    # Remove the node
    current.next = current.next.next
    
    return head
```

**Time Complexity:** O(L) where L is the length of the list  
**Space Complexity:** O(1)

### Approach 2: One-Pass with Two Pointers (Optimal)

Use two pointers separated by n nodes. When the fast pointer reaches the end, the slow pointer is before the target node.

```python
def removeNthFromEnd(head, n):
    """
    One-pass two-pointer approach
    Time: O(L), Space: O(1)
    """
    # Dummy node handles edge case of removing head
    dummy = ListNode(0)
    dummy.next = head
    
    fast = dummy
    slow = dummy
    
    # Move fast pointer n+1 steps ahead
    for _ in range(n + 1):
        fast = fast.next
    
    # Move both pointers until fast reaches end
    while fast is not None:
        fast = fast.next
        slow = slow.next
    
    # Remove the target node
    slow.next = slow.next.next
    
    return dummy.next
```

**Time Complexity:** O(L) - Single pass  
**Space Complexity:** O(1)

### Example Walkthrough:

```
List: 1 -> 2 -> 3 -> 4 -> 5 -> NULL, n = 2
Target: Remove 4 (2nd from end)

Setup: dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> NULL

Phase 1: Position fast pointer
  fast moves n+1 = 3 steps ahead
  
  Start: fast = dummy, slow = dummy
  Step 1: fast = 1
  Step 2: fast = 2
  Step 3: fast = 3
  
  Now: fast = 3, slow = dummy
        slow                fast
        dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> NULL

Phase 2: Move both pointers
  Step 1: fast = 4, slow = 1
  Step 2: fast = 5, slow = 2
  Step 3: fast = NULL, slow = 3
  
  When fast is NULL, slow is at node before target
        slow points here
        dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> NULL

Phase 3: Remove target
  slow.next = slow.next.next
  3.next = 5
  
Result: dummy -> 1 -> 2 -> 3 -> 5 -> NULL
Return dummy.next = 1 -> 2 -> 3 -> 5 -> NULL
```

### Why Use Dummy Node?

Consider removing the head (n equals length):
```
List: 1 -> 2 -> 3, n = 3

Without dummy:
  - Special case handling needed
  - Return head.next directly

With dummy:
  dummy -> 1 -> 2 -> 3
  - Uniform handling
  - slow ends at dummy
  - dummy.next = head.next
  - Works like any other removal
```

### JavaScript Solution:

```javascript
function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    
    let fast = dummy;
    let slow = dummy;
    
    // Move fast n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    // Move both until fast reaches end
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // Remove target node
    slow.next = slow.next.next;
    
    return dummy.next;
}
```

### Java Solution:

```java
public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    
    ListNode fast = dummy;
    ListNode slow = dummy;
    
    // Move fast n+1 steps ahead
    for (int i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    // Move both until fast reaches end
    while (fast != null) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // Remove target node
    slow.next = slow.next.next;
    
    return dummy.next;
}
```

### Key Insights:
- Two-pointer technique with gap of n nodes is the optimal approach
- Dummy node elegantly handles the edge case of removing the head
- Moving fast pointer n+1 steps (not n) positions slow before the target
- This is a one-pass solution compared to the two-pass counting approach
- The gap between pointers is maintained as they move together

---
## 6. Intersection of Two Linked Lists

**Question:** Given the heads of two singly linked lists, return the node at which they intersect. If the two lists have no intersection, return null.

**Example:**
```
List A: 4 -> 1 -> \
                   8 -> 4 -> 5 -> NULL
List B: 5 -> 6 -> /

Output: Node with value 8 (intersection point)
```

**Detailed Answer:**

### Approach 1: Hash Set

Store all nodes from one list in a set, then traverse the other list to find the first common node.

```python
def getIntersectionNode(headA, headB):
    """
    Hash set approach
    Time: O(m + n), Space: O(m) or O(n)
    """
    visited = set()
    
    # Store all nodes from list A
    current = headA
    while current:
        visited.add(current)
        current = current.next
    
    # Find first common node in list B
    current = headB
    while current:
        if current in visited:
            return current
        current = current.next
    
    return None
```

**Time Complexity:** O(m + n) where m and n are lengths of the lists  
**Space Complexity:** O(m) or O(n) - Store one list in the set

### Approach 2: Two Pointers (Optimal)

Use two pointers that switch lists when they reach the end. They will meet at the intersection or both become None.

```python
def getIntersectionNode(headA, headB):
    """
    Two-pointer approach (optimal)
    Time: O(m + n), Space: O(1)
    """
    if not headA or not headB:
        return None
    
    pointerA = headA
    pointerB = headB
    
    # Traverse both lists
    # When a pointer reaches end, redirect it to the other list's head
    while pointerA != pointerB:
        pointerA = pointerA.next if pointerA else headB
        pointerB = pointerB.next if pointerB else headA
    
    # Either both are None (no intersection) or both point to intersection
    return pointerA
```

**Time Complexity:** O(m + n)  
**Space Complexity:** O(1)

### Approach 3: Length Difference

Calculate lengths of both lists, align them, then traverse together.

```python
def getIntersectionNode(headA, headB):
    """
    Length difference approach
    Time: O(m + n), Space: O(1)
    """
    def getLength(head):
        length = 0
        while head:
            length += 1
            head = head.next
        return length
    
    lenA = getLength(headA)
    lenB = getLength(headB)
    
    # Align both lists to same starting position
    while lenA > lenB:
        headA = headA.next
        lenA -= 1
    
    while lenB > lenA:
        headB = headB.next
        lenB -= 1
    
    # Find intersection
    while headA != headB:
        headA = headA.next
        headB = headB.next
    
    return headA
```

**Time Complexity:** O(m + n)  
**Space Complexity:** O(1)

### Why Two Pointers Work:

```
List A: a1 -> a2 -> c1 -> c2 -> c3
List B: b1 -> b2 -> b3 -> c1 -> c2 -> c3

Let:
- Length before intersection in A = a
- Length before intersection in B = b
- Length of intersection = c

Total length A = a + c
Total length B = b + c

Pointer A path: a1 -> a2 -> c1 -> c2 -> c3 -> b1 -> b2 -> b3 -> c1
                (travels a + c + b = a + b + c)

Pointer B path: b1 -> b2 -> b3 -> c1 -> c2 -> c3 -> a1 -> a2 -> c1
                (travels b + c + a = a + b + c)

They meet at c1 after traveling the same distance!
```

### Example Walkthrough:

```
List A: 4 -> 1 -> 8 -> 4 -> 5 -> NULL
List B: 5 -> 6 -> 1 -> 8 -> 4 -> 5 -> NULL
              (different 1)  (same 8)

Iteration by iteration:
pA = 4,  pB = 5
pA = 1,  pB = 6
pA = 8,  pB = 1
pA = 4,  pB = 8
pA = 5,  pB = 4
pA = NULL → switch to headB = 5
pB = 5
pA = 5,  pB = NULL → switch to headA = 4
pA = 6,  pB = 4
pA = 1,  pB = 1
pA = 8,  pB = 8 → MATCH! Return 8
```

### JavaScript Solution:

```javascript
// Two-pointer approach
function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;
    
    let pointerA = headA;
    let pointerB = headB;
    
    while (pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }
    
    return pointerA;
}

// Length difference approach
function getIntersectionNodeLengthDiff(headA, headB) {
    const getLength = (head) => {
        let length = 0;
        while (head) {
            length++;
            head = head.next;
        }
        return length;
    };
    
    let lenA = getLength(headA);
    let lenB = getLength(headB);
    
    while (lenA > lenB) {
        headA = headA.next;
        lenA--;
    }
    
    while (lenB > lenA) {
        headB = headB.next;
        lenB--;
    }
    
    while (headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }
    
    return headA;
}
```

### Java Solution:

```java
// Two-pointer approach
public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    if (headA == null || headB == null) return null;
    
    ListNode pointerA = headA;
    ListNode pointerB = headB;
    
    while (pointerA != pointerB) {
        pointerA = (pointerA != null) ? pointerA.next : headB;
        pointerB = (pointerB != null) ? pointerB.next : headA;
    }
    
    return pointerA;
}

// Length difference approach
public ListNode getIntersectionNodeLengthDiff(ListNode headA, ListNode headB) {
    int lenA = getLength(headA);
    int lenB = getLength(headB);
    
    while (lenA > lenB) {
        headA = headA.next;
        lenA--;
    }
    
    while (lenB > lenA) {
        headB = headB.next;
        lenB--;
    }
    
    while (headA != headB) {
        headA = headA.next;
        headB = headB.next;
    }
    
    return headA;
}

private int getLength(ListNode head) {
    int length = 0;
    while (head != null) {
        length++;
        head = head.next;
    }
    return length;
}
```

### Key Insights:
- Intersection means the exact same node object, not just same value
- The two-pointer approach is elegant: switching lists equalizes path lengths
- Both pointers travel the same total distance: len(A) + len(B)
- If no intersection, both pointers become null simultaneously
- This problem tests understanding of pointer manipulation and path lengths

---
## 7. Add Two Numbers Represented as Linked Lists

**Question:** You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.

**Example:**
```
Input: 
  l1 = 2 -> 4 -> 3  (represents 342)
  l2 = 5 -> 6 -> 4  (represents 465)
Output: 7 -> 0 -> 8  (represents 807, because 342 + 465 = 807)
```

**Detailed Answer:**

### Approach: Elementary Math with Carry

Simulate addition digit by digit with carry, just like adding numbers on paper.

```python
def addTwoNumbers(l1, l2):
    """
    Add two numbers represented as linked lists
    Time: O(max(m, n)), Space: O(max(m, n))
    """
    dummy = ListNode(0)
    current = dummy
    carry = 0
    
    while l1 or l2 or carry:
        # Get values (0 if node is None)
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        
        # Calculate sum and carry
        total = val1 + val2 + carry
        carry = total // 10
        digit = total % 10
        
        # Create new node
        current.next = ListNode(digit)
        current = current.next
        
        # Move to next nodes
        if l1:
            l1 = l1.next
        if l2:
            l2 = l2.next
    
    return dummy.next
```

**Time Complexity:** O(max(m, n)) where m and n are lengths of the lists  
**Space Complexity:** O(max(m, n)) for the result list

### Example Walkthrough:

```
l1 = 2 -> 4 -> 3 -> NULL  (342)
l2 = 5 -> 6 -> 4 -> NULL  (465)

Initial: dummy -> NULL, carry = 0

Step 1: Add 2 + 5 + 0
  total = 7, carry = 0, digit = 7
  dummy -> 7
  l1 = 4, l2 = 6

Step 2: Add 4 + 6 + 0
  total = 10, carry = 1, digit = 0
  dummy -> 7 -> 0
  l1 = 3, l2 = 4

Step 3: Add 3 + 4 + 1
  total = 8, carry = 0, digit = 8
  dummy -> 7 -> 0 -> 8
  l1 = NULL, l2 = NULL

Step 4: No more nodes and carry = 0
  Stop

Result: 7 -> 0 -> 8 (represents 807)
```

### Example with Different Lengths:

```
l1 = 9 -> 9 -> 9 -> 9 -> NULL  (9999)
l2 = 1 -> NULL                  (1)

Step 1: 9 + 1 + 0 = 10
  carry = 1, digit = 0
  Result: 0

Step 2: 9 + 0 + 1 = 10
  carry = 1, digit = 0
  Result: 0 -> 0

Step 3: 9 + 0 + 1 = 10
  carry = 1, digit = 0
  Result: 0 -> 0 -> 0

Step 4: 9 + 0 + 1 = 10
  carry = 1, digit = 0
  Result: 0 -> 0 -> 0 -> 0

Step 5: No more nodes but carry = 1
  digit = 1
  Result: 0 -> 0 -> 0 -> 0 -> 1

Final: 0 -> 0 -> 0 -> 0 -> 1 (represents 10000)
```

### Variant: Numbers in Forward Order

If numbers are stored in forward order, we can reverse them first:

```python
def addTwoNumbersForward(l1, l2):
    """
    Add numbers stored in forward order
    """
    def reverseList(head):
        prev = None
        current = head
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        return prev
    
    # Reverse both lists
    l1 = reverseList(l1)
    l2 = reverseList(l2)
    
    # Add them (in reverse order)
    result = addTwoNumbers(l1, l2)
    
    # Reverse the result back
    return reverseList(result)
```

### JavaScript Solution:

```javascript
function addTwoNumbers(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        
        const total = val1 + val2 + carry;
        carry = Math.floor(total / 10);
        const digit = total % 10;
        
        current.next = new ListNode(digit);
        current = current.next;
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    return dummy.next;
}
```

### Java Solution:

```java
public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    int carry = 0;
    
    while (l1 != null || l2 != null || carry != 0) {
        int val1 = (l1 != null) ? l1.val : 0;
        int val2 = (l2 != null) ? l2.val : 0;
        
        int total = val1 + val2 + carry;
        carry = total / 10;
        int digit = total % 10;
        
        current.next = new ListNode(digit);
        current = current.next;
        
        if (l1 != null) l1 = l1.next;
        if (l2 != null) l2 = l2.next;
    }
    
    return dummy.next;
}
```

### Key Insights:
- Process digits one at a time from least significant to most significant
- Carry propagates to the next position just like manual addition
- Continue while any list has nodes OR carry exists
- Handle lists of different lengths by treating missing nodes as 0
- The reverse order storage makes addition straightforward
- For forward order, reverse the lists first, add, then reverse the result

---
## 8. Clone a Linked List with Random Pointer

**Question:** A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null. Return a deep copy of the list.

**Node Definition:**
```python
class Node:
    def __init__(self, val, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random
```

**Example:**
```
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Node 0: val=7, next=Node1, random=None
Node 1: val=13, next=Node2, random=Node0
Node 2: val=11, next=Node3, random=Node4
Node 3: val=10, next=Node4, random=Node2
Node 4: val=1, next=None, random=Node0
```

**Detailed Answer:**

### Approach 1: Hash Map

Use a hash map to store the mapping from original nodes to cloned nodes.

```python
def copyRandomList(head):
    """
    Hash map approach
    Time: O(n), Space: O(n)
    """
    if not head:
        return None
    
    # Dictionary to map original nodes to cloned nodes
    old_to_new = {}
    
    # First pass: Create all nodes
    current = head
    while current:
        old_to_new[current] = Node(current.val)
        current = current.next
    
    # Second pass: Set next and random pointers
    current = head
    while current:
        if current.next:
            old_to_new[current].next = old_to_new[current.next]
        if current.random:
            old_to_new[current].random = old_to_new[current.random]
        current = current.next
    
    return old_to_new[head]
```

**Time Complexity:** O(n) - Two passes through the list  
**Space Complexity:** O(n) - Hash map stores all nodes

### Approach 2: Interweaving Nodes (Optimal Space)

Clone nodes and interweave them with original nodes, eliminating the need for a hash map.

```python
def copyRandomList(head):
    """
    Interweaving approach
    Time: O(n), Space: O(1) (excluding output)
    """
    if not head:
        return None
    
    # Step 1: Create cloned nodes and interweave them
    # Original: A -> B -> C
    # After:    A -> A' -> B -> B' -> C -> C'
    current = head
    while current:
        cloned = Node(current.val)
        cloned.next = current.next
        current.next = cloned
        current = cloned.next
    
    # Step 2: Set random pointers for cloned nodes
    current = head
    while current:
        if current.random:
            current.next.random = current.random.next
        current = current.next.next
    
    # Step 3: Separate the two lists
    current = head
    cloned_head = head.next
    while current:
        cloned = current.next
        current.next = cloned.next
        if cloned.next:
            cloned.next = cloned.next.next
        current = current.next
    
    return cloned_head
```

**Time Complexity:** O(n) - Three passes through the list  
**Space Complexity:** O(1) - No extra space except output

### Example Walkthrough (Interweaving):

```
Original list:
A(val=7, random=None) -> B(val=13, random=A) -> C(val=11, random=None)

Step 1: Interweave cloned nodes
A -> A'(val=7) -> B -> B'(val=13) -> C -> C'(val=11) -> NULL

Step 2: Set random pointers
Process A:
  A.random = None, so A'.random = None
  
Process B:
  B.random = A, so B'.random = A.next = A'
  Now B'.random correctly points to A'
  
Process C:
  C.random = None, so C'.random = None

Current state:
A -> A'(random=None) -> B -> B'(random=A') -> C -> C'(random=None)

Step 3: Separate lists
Restore original: A -> B -> C
Extract clone:    A' -> B' -> C'

Return A' as head of cloned list
```

### Detailed Step 3 Separation:

```
Before separation:
A -> A' -> B -> B' -> C -> C' -> NULL

Initialize:
current = A
cloned_head = A'

Iteration 1: current = A
  cloned = A'
  A.next = B (skip A')
  A'.next = B' (skip B)
  current = B

Iteration 2: current = B
  cloned = B'
  B.next = C (skip B')
  B'.next = C' (skip C)
  current = C

Iteration 3: current = C
  cloned = C'
  C.next = NULL (skip C')
  C'.next = NULL
  current = NULL

Result:
Original: A -> B -> C -> NULL
Clone:    A' -> B' -> C' -> NULL
```

### JavaScript Solution:

```javascript
// Hash map approach
function copyRandomList(head) {
    if (!head) return null;
    
    const oldToNew = new Map();
    
    // First pass: create nodes
    let current = head;
    while (current) {
        oldToNew.set(current, new Node(current.val));
        current = current.next;
    }
    
    // Second pass: set pointers
    current = head;
    while (current) {
        const cloned = oldToNew.get(current);
        cloned.next = oldToNew.get(current.next) || null;
        cloned.random = oldToNew.get(current.random) || null;
        current = current.next;
    }
    
    return oldToNew.get(head);
}

// Interweaving approach
function copyRandomListOptimal(head) {
    if (!head) return null;
    
    // Step 1: Interweave
    let current = head;
    while (current) {
        const cloned = new Node(current.val);
        cloned.next = current.next;
        current.next = cloned;
        current = cloned.next;
    }
    
    // Step 2: Set random pointers
    current = head;
    while (current) {
        if (current.random) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }
    
    // Step 3: Separate
    current = head;
    const clonedHead = head.next;
    while (current) {
        const cloned = current.next;
        current.next = cloned.next;
        if (cloned.next) {
            cloned.next = cloned.next.next;
        }
        current = current.next;
    }
    
    return clonedHead;
}
```

### Java Solution:

```java
// Hash map approach
public Node copyRandomList(Node head) {
    if (head == null) return null;
    
    Map<Node, Node> oldToNew = new HashMap<>();
    
    // First pass
    Node current = head;
    while (current != null) {
        oldToNew.put(current, new Node(current.val));
        current = current.next;
    }
    
    // Second pass
    current = head;
    while (current != null) {
        Node cloned = oldToNew.get(current);
        cloned.next = oldToNew.get(current.next);
        cloned.random = oldToNew.get(current.random);
        current = current.next;
    }
    
    return oldToNew.get(head);
}

// Interweaving approach
public Node copyRandomListOptimal(Node head) {
    if (head == null) return null;
    
    // Step 1: Interweave
    Node current = head;
    while (current != null) {
        Node cloned = new Node(current.val);
        cloned.next = current.next;
        current.next = cloned;
        current = cloned.next;
    }
    
    // Step 2: Set random pointers
    current = head;
    while (current != null) {
        if (current.random != null) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }
    
    // Step 3: Separate
    current = head;
    Node clonedHead = head.next;
    while (current != null) {
        Node cloned = current.next;
        current.next = cloned.next;
        if (cloned.next != null) {
            cloned.next = cloned.next.next;
        }
        current = current.next;
    }
    
    return clonedHead;
}
```

### Key Insights:
- **Deep copy** means creating new node objects, not just copying references
- Hash map approach is intuitive: map each original node to its clone
- Interweaving is clever: temporarily merge lists to track correspondence
- The random pointer makes this harder than regular list cloning
- Interweaving achieves O(1) space by using the next pointers cleverly
- Two separate passes ensure all nodes exist before setting pointers

---
## Summary: Key Concepts and Practice Tips

### Essential Patterns

1. **Two Pointers / Fast and Slow**
   - Detecting cycles
   - Finding middle element
   - Removing nth from end
   - Intersection point
   - **When to use:** Problems involving relative positions or detecting patterns

2. **Dummy Node**
   - Simplifies edge cases (especially when head might change)
   - Merging lists
   - Removing nodes
   - **When to use:** When the head of the list might be modified

3. **Reversing**
   - Iterative with three pointers (prev, current, next)
   - Recursive approach
   - **Applications:** Reverse list, add numbers, palindrome checking

4. **Hash Map / Set**
   - Tracking visited nodes
   - Cloning with random pointers
   - Detecting cycles or intersections
   - **Trade-off:** Space for simplicity

### Time Complexity Patterns

- **Single traversal:** O(n) - Most linked list operations
- **Two traversals:** O(2n) = O(n) - Still linear
- **Nested loops:** Avoid! Usually means suboptimal solution

### Space Complexity Patterns

- **O(1):** Iterative solutions with pointers only
- **O(n):** Recursive solutions (call stack) or using hash maps
- **Goal:** Aim for O(1) when possible using two-pointer techniques

### Common Edge Cases

1. **Empty list:** `head is None`
2. **Single node:** `head.next is None`
3. **Two nodes:** Minimum for many two-pointer problems
4. **Even vs odd length:** Affects middle finding, palindrome checks
5. **Cycles:** Ensure your solution doesn't infinite loop

### Practice Strategy

1. **Master the basics first:**
   - Traversal
   - Insertion/deletion
   - Reversal
   - Finding length

2. **Learn pattern recognition:**
   - See "nth from end" → Think two pointers with gap
   - See "cycle" → Think fast and slow pointers
   - See "merge/combine" → Think dummy node
   - See "random pointer" → Think hash map or interweaving

3. **Always consider:**
   - Can I do it in one pass?
   - Do I need extra space?
   - What are the edge cases?
   - Can recursion simplify this?

4. **Draw it out:**
   - Linked list problems are visual
   - Draw the pointers before and after operations
   - Track multiple pointers with diagrams

5. **Common mistakes to avoid:**
   - Losing reference to nodes before updating pointers
   - Not handling null pointers
   - Off-by-one errors in positioning
   - Forgetting to return the correct head

### Problem-Solving Template

```python
def linkedListProblem(head):
    # 1. Handle edge cases
    if not head or not head.next:
        return head  # or appropriate value
    
    # 2. Use dummy node if head might change
    dummy = ListNode(0)
    dummy.next = head
    
    # 3. Initialize pointers
    slow = fast = current = head
    
    # 4. Traverse with appropriate logic
    while condition:
        # Update pointers
        # Perform operations
        pass
    
    # 5. Return appropriate result
    return dummy.next  # or other value
```

### Advanced Topics to Explore

1. **Reverse nodes in k-groups**
2. **Flatten a multilevel doubly linked list**
3. **LRU Cache using doubly linked list**
4. **Skip lists**
5. **XOR linked lists**

### Interview Tips

- **Clarify the problem:**
  - Singly or doubly linked list?
  - Can I modify the original list?
  - What should I return?

- **Explain your approach:**
  - Walk through your logic before coding
  - Mention time and space complexity

- **Test your solution:**
  - Empty list
  - Single element
  - Two elements
  - Even and odd lengths
  - Special cases specific to the problem

- **Optimize if asked:**
  - Can two passes become one?
  - Can we eliminate the hash map?
  - Is there a more elegant solution?

### Comparison with Arrays

| Aspect | Linked List | Array |
|--------|------------|-------|
| Access | O(n) - Sequential | O(1) - Random |
| Search | O(n) | O(n) or O(log n) if sorted |
| Insert at beginning | O(1) | O(n) - Shift elements |
| Insert at end | O(n) or O(1) with tail | O(1) amortized |
| Delete | O(1) with pointer | O(n) - Shift elements |
| Memory | Extra pointer space | Contiguous memory |
| Cache | Poor locality | Good locality |

### When to Use Linked Lists

- **Frequent insertions/deletions** at arbitrary positions
- **Unknown size** that grows/shrinks frequently
- **Don't need random access**
- **Implementing queues, stacks** (with doubly linked lists)

Remember: The key to mastering linked lists is understanding pointer manipulation and recognizing which pattern to apply. Practice these problems multiple times until the patterns become second nature!
