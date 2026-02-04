/**
 * DATA STRUCTURE PROBLEMS
 * Common coding interview questions related to data structures
 */

// 1. Stack Implementation
class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        this.items.push(element);
    }
    
    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }
    
    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
    
    clear() {
        this.items = [];
    }
}

// 2. Queue Implementation
class Queue {
    constructor() {
        this.items = [];
    }
    
    enqueue(element) {
        this.items.push(element);
    }
    
    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }
    
    front() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
    
    clear() {
        this.items = [];
    }
}

// 3. Linked List Node
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// 4. Linked List Implementation
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    append(value) {
        const newNode = new ListNode(value);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
        this.length++;
        return this;
    }
    
    prepend(value) {
        const newNode = new ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
        
        if (!this.tail) {
            this.tail = newNode;
        }
        
        this.length++;
        return this;
    }
    
    insert(value, index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.prepend(value);
        if (index === this.length) return this.append(value);
        
        const newNode = new ListNode(value);
        let current = this.head;
        
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        
        return true;
    }
    
    remove(value) {
        if (!this.head) return null;
        
        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return value;
        }
        
        let current = this.head;
        
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                if (!current.next) {
                    this.tail = current;
                }
                this.length--;
                return value;
            }
            current = current.next;
        }
        
        return null;
    }
    
    find(value) {
        let current = this.head;
        
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        
        return null;
    }
    
    reverse() {
        let prev = null;
        let current = this.head;
        this.tail = this.head;
        
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        
        this.head = prev;
        return this;
    }
    
    toArray() {
        const arr = [];
        let current = this.head;
        
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        
        return arr;
    }
}

// 5. Binary Tree Node
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// 6. Binary Search Tree Implementation
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    insert(value) {
        const newNode = new TreeNode(value);
        
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        
        let current = this.root;
        
        while (true) {
            if (value === current.value) return undefined;
            
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    
    search(value) {
        let current = this.root;
        
        while (current) {
            if (value === current.value) return current;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        
        return null;
    }
    
    // In-order traversal (Left, Root, Right)
    inOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }
    
    // Pre-order traversal (Root, Left, Right)
    preOrderTraversal(node = this.root, result = []) {
        if (node) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }
    
    // Post-order traversal (Left, Right, Root)
    postOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.postOrderTraversal(node.left, result);
            this.postOrderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    }
    
    // Level-order traversal (Breadth-First Search)
    levelOrderTraversal() {
        if (!this.root) return [];
        
        const result = [];
        const queue = [this.root];
        
        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.value);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        return result;
    }
    
    // Find minimum value
    findMin(node = this.root) {
        if (!node) return null;
        while (node.left) {
            node = node.left;
        }
        return node.value;
    }
    
    // Find maximum value
    findMax(node = this.root) {
        if (!node) return null;
        while (node.right) {
            node = node.right;
        }
        return node.value;
    }
    
    // Get height of tree
    height(node = this.root) {
        if (!node) return -1;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
}

// 7. Hash Table Implementation
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    
    _hash(key) {
        let total = 0;
        const PRIME = 31;
        
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        
        return total;
    }
    
    set(key, value) {
        const index = this._hash(key);
        
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        
        // Check if key already exists
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
                this.keyMap[index][i][1] = value;
                return;
            }
        }
        
        this.keyMap[index].push([key, value]);
    }
    
    get(key) {
        const index = this._hash(key);
        
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        
        return undefined;
    }
    
    keys() {
        const keysArr = [];
        
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keysArr.push(this.keyMap[i][j][0]);
                }
            }
        }
        
        return keysArr;
    }
    
    values() {
        const valuesArr = [];
        
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        
        return valuesArr;
    }
}

// 8. Graph Implementation (Adjacency List)
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
    
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                v => v !== vertex2
            );
        }
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                v => v !== vertex1
            );
        }
    }
    
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    
    // Depth-First Search
    dfs(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        
        (function traverse(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return traverse(neighbor);
                }
            });
        })(start);
        
        return result;
    }
    
    // Breadth-First Search
    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        
        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);
            
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        
        return result;
    }
}

module.exports = {
    Stack,
    Queue,
    ListNode,
    LinkedList,
    TreeNode,
    BinarySearchTree,
    HashTable,
    Graph
};
