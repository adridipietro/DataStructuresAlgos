# BIG O NOTATION

- how long an algo takes to run
- BIG O relies on SCALABILITY + READABILITY
- BIG O is measured by operations x elements
- when the input (the elements) gets larger, how much does the algo (or function; the operations) slow down?
- the less it slows down the more efficient the algo is
- each operation (algo) takes time in a computer


O(n)
- linear; as elements increase operations increase
- n = number of inputs
- number of inputs === number of operations
- most common BIG O Notation; it is considered to be "fair"; not the most efficient
- proportional 


O(1)
- constant time; no matter how many inputs there are, we are always grabbing the first item in the array. 
- number of operations === 1
- constant === always
- resembles a horizontal line on a graph
- the number of operations never increases or decreases despite an increase or decrease in number of inputs(array items)
- it is considered to be "excellent" because it is very scalable and predictable

What Code is What Notation?
- loops are linear time === O(n)
  - ex) for (let i = 0; i < array.length; i++)
- variable assignment or reassignment is constant time === O(1)
  - ex) let a = 50 + 3
  - ex) let fishName = 'Bruce'
- variable assignment within a loop === O(n)
- console.logging === 0(1)
  - ex) console.log(items[0])


Rules For BIG O

1. Worst Case
    - worst case is that a loop has to iterate through each array item to get to the last array item.
    - use "break" in a loop to stop the loop from running once the desired array item is found. 
2. Remove Constants
    - remove the constants from the BIG O Notation. 
      - ex) O(2n) => O(n)
3. Different Variables For Different Inputs
    - O(a + b)
    - different notation for different inputs because we may not know the length.
4. Drop Non Dominant Terms
    - drop the insignificant numbers. 
  


NESTED LOOPS
O(n^2)

- quadratic time; every time the amount of elements increases, the number of operations increase quadratically. 
- every element in a collection needs to be compared to every other element.
- considered "horrible"; as the number of inputs increase, the number of operations increase so much that it slows everything down. 


What causes time in a function?
- operations (+ - * /)
- comparisons (< > ==)
- looping (for, while)
- outside function call (function())


O(n!)
- factorial time
- do not use this
- most time consuming and expensive
- adding a nested loop for every input we have -- soooo terrible!


Scalable = Speed (how much time does it take for a function to run) + Memory (computers have limited memory)

3 PILLARS OF CODE

1. READABLE/MAINTAINABLE
2. SPEED/TIME COMPLEXITY
3. MEMORY USAGE OF CODE / SPACE COMPLEXITY

MOST CODING HAS A TRADEOFF BETWEEN SPEED + MEMORY; if you want your code to run faster, it is going to take up more memory. Vice Versa. 

HEAP 
- where we store variables assigned

STACK
- where we keep track of our function calls

WHAT CAUSES SPACE COMPLEXITY?
- adding variables
- adding data structures
- adding function calls 