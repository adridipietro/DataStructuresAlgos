# Arrays

- Organizes items sequentially in memory (one after the other)
- Simplest + most common data structure
- Smallest footprint of any data structure
- Stored in congruity (index, indices)

Operations
- lookups: o(1)
- push: o(1)
- pop: o(1)
- unshift: o(n)
- splice: o(n)


## Static v. Dynamic Arrays

Static
  - fixed in size; need to decide how many array items have to be in the array. 

Dynamic 
  - allow us to copy and recreate an array at a new location with more memory (if need be)


## Pros + Cons

Pros
- Fast lookups (accessing information based on index)
- Fast push/pop (adding things to end of array or removing something from the end of array)
- Ordered Lists (sorted and stored in memory)

Cons
- slow inserts + deletes (due to shifting indices)
- fixed size (declared memory ahead of time; static arrays)