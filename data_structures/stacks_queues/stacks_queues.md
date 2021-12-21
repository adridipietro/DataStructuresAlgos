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

Realistic example of a stack is browser 'back' and 'forward' functionality; the last page we visited is what produced when clicked 'back'.

Stacks have tops and bottoms; we can build these things with either arrays or linked lists.


## Queues

FIRST IN FIRST OUT (FIFO)

* Lookup O(n)
* Enqueue O(1) -- add to end of queue
* Dequeue O(1) -- remove first of queue
* Peek O(1) -- first element of queue

Realistic example of a queue is Uber -- the first person to request an Uber will receive the first available Uber. 

We can use arrays or linked lists to implement Queues. HOWEVER, linked lists is the BETTER option. Linked Lists do NOT have indices whereas arrays do; we would have to shift the indices a lot because the first item is OUT first.  With Linked Lists we would just have to change the head with the removal of the first item. 

## Review + Recap

* Stacks and queues are built on other data structures such as arrays or linked lists.
* Stacks + queues have fast insertion (front or end), fast peek.
* Stacks + queues are ordered.
* Slow lookup or search :(


