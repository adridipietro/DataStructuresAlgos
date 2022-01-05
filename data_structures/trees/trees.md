# TREES

* Hierarchical data structure.
* Made up of nodes.
* Starts with a single root node; every node thereafter descends from this root node. 
* Every child node descends from a single parent node. 
* Unidirectional flow: A node can only point to a child.
* Leaf nodes - nodes at the end of the tree. 
* The DOM is an example of a TREE. 
* Nodes can contain any type of information or data. 
* A Linked List is a like a branch of a tree -- it is linear and singular. 
* There are a lot of different types of trees:
    * Binary


## BINARY TREE

* It is a type of tree. 
* Each node can only have zero, one or two nodes. 
* Each child can only have 1 parent. 
* Each node represents a certain state. 

### PERFECT BINARY TREE

* A Perfect Binary Tree is symmetrical; everything is filled - every node has two (2) children. 
* Perfect Binary trees are very efficient. 
* As we move down the tree, the amount of nodes double from the previous level. 
    * Example: 1 -> 2 -> 4 -> 8
* Perfect Binary trees are predicatble and formulaic. 
* The bottom level of nodes ALWAYS represents almost HALF of the amount of total nodes in the tree. 

In a Perfect Binary Tree, you can calculate how many nodes are in a level with this formula:
  * 2^(level) = how many nodes are in that level
  * The levels of a tree are zero-based index. 
  * The first level is Level 0. 

EXAMPLE: 
Level 0: 2^0 => 1 nodes
Level 1: 2^1 => 2 nodes
Level 2: 2^2 => 4 nodes

To find the total amount of nodes:
* 2^(amount of levels) - 1 

EXAMPLE:
4 Levels
2^4 - 1 => 15 total nodes


### FULL BINARY TREE 

* A Full Binary Tree is asymmetrical.
* A node either has zero (0) or two (2) children; never only 1 child.

## BIG O NOTATION

* Lookup O(log N)
* Insert O(log N)
* Delete O(log N)

O(log N) => 
* it means that as the input size grows, the number of operations grows very slowly

* the choice of the next element on which to perform some action is one of several possibilities, and only one will need to be chosen. We don't need to check all. 

* allows us to search efficiently. 


