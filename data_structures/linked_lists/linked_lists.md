# LINKED LISTS

Collisions in hash tables yield linked lists.

JavaScript does not have linked lists built in. But, linked lists can be built. 

## What is a Linked List
* A list consisting of sets of nodes 
* Nodes consist of two things: (the value of data, the pointer to the next node in line)
* First node === head
* Last node === tail
* Null Terminated => the end of the list points to 'null'
* Pointer (or points to) => a data structure or element that provides links to nodes

## Why Linked Lists?

* Loose Structure ==> values can be inserted anywhere into the list
* Traversal => similar to iteration; except traversal ends when you hit 'null'
* No shifting in indices necessary
* Traversing a linked list is slower than iterating through an array
* Deletion of nodes is easy
* Some order to linked lists due to pointers

## BIG O NOTATION OF LINKED LISTS

prepend => O(1)
append => O(1)
lookup => O(n)
insert => O(n)
delete => O(n)


## POINTERS

* a reference to another place or object (node) in memory
* in JS, we can demonstrate pointers by referencing an already declared + assigned object. 

Example: 
    const obj1 = "Cat"
    const obj2 = obj1

* Both obj1 and obj2 point to the same location in memory. 
