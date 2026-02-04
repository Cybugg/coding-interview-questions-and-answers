/**
 * EXAMPLES: Data Structure Problems
 * Demonstrating usage of common data structures
 */

const {
    Stack,
    Queue,
    LinkedList,
    BinarySearchTree,
    HashTable,
    Graph
} = require('./data-structure-problems');

console.log('=== DATA STRUCTURE EXAMPLES ===\n');

// 1. Stack
console.log('1. Stack:');
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('Pushed: 1, 2, 3');
console.log('Peek:', stack.peek());
console.log('Pop:', stack.pop());
console.log('Size:', stack.size());
console.log();

// 2. Queue
console.log('2. Queue:');
const queue = new Queue();
queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');
console.log('Enqueued: first, second, third');
console.log('Front:', queue.front());
console.log('Dequeue:', queue.dequeue());
console.log('Size:', queue.size());
console.log();

// 3. Linked List
console.log('3. Linked List:');
const list = new LinkedList();
list.append(1).append(2).append(3).append(4);
console.log('Appended: 1, 2, 3, 4');
console.log('List as array:', list.toArray());
list.prepend(0);
console.log('After prepending 0:', list.toArray());
list.remove(2);
console.log('After removing 2:', list.toArray());
list.reverse();
console.log('After reversing:', list.toArray());
console.log();

// 4. Binary Search Tree
console.log('4. Binary Search Tree:');
const bst = new BinarySearchTree();
bst.insert(5).insert(3).insert(7).insert(2).insert(4).insert(6).insert(8);
console.log('Inserted: 5, 3, 7, 2, 4, 6, 8');
console.log('In-order traversal:', bst.inOrderTraversal());
console.log('Pre-order traversal:', bst.preOrderTraversal());
console.log('Post-order traversal:', bst.postOrderTraversal());
console.log('Level-order traversal:', bst.levelOrderTraversal());
console.log('Minimum value:', bst.findMin());
console.log('Maximum value:', bst.findMax());
console.log('Tree height:', bst.height());
console.log('Search for 4:', bst.search(4) !== null ? 'Found' : 'Not found');
console.log();

// 5. Hash Table
console.log('5. Hash Table:');
const hashTable = new HashTable();
hashTable.set('name', 'John');
hashTable.set('age', 30);
hashTable.set('city', 'New York');
console.log('Set: name=John, age=30, city=New York');
console.log('Get name:', hashTable.get('name'));
console.log('Get age:', hashTable.get('age'));
console.log('All keys:', hashTable.keys());
console.log('All values:', hashTable.values());
console.log();

// 6. Graph
console.log('6. Graph:');
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
console.log('Added vertices: A, B, C, D');
console.log('Added edges: A-B, A-C, B-D, C-D');
console.log('DFS from A:', graph.dfs('A'));
console.log('BFS from A:', graph.bfs('A'));
console.log();

console.log('=== All Examples Completed ===');
