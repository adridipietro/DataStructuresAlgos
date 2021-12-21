# STACKS AND QUEUES

Both are linear data structures -- allow us to traverse (go through data elements sequentially).

Both can be implemented in similar ways -- the main difference lies in how elements are removed in a stack versus a queue.

We can easily access first and/or last element of a stack or queue.

Unlike arrays and linked lists, we have less actions we can use. 

Stacks + queues are considered higher order data structure (more complex) -- we can control more efficient operations with higher order data structures. 

## Stacks

LAST IN FIRST OUT (LIFO)

* Lookup O(n)
* Pop O(1) -- remove last item added to stack
* Push O(1) -- add item to stack
* Peek O(1) -- first element of stack (last added in)

## Queues

FIRST IN FIRST OUT (FIFO)

* Lookup O(n)
* Enqueue O(1) -- add to end of queue
* Dequeue O(1) -- remove first of queue
* Peek O(1) -- first element of queue