# HASH TABLES 

Also known as maps, objects...

Objects, in JavaScript, are a type of hash tables. 

Hash tables are prevalent in databases, caches...

With hash tables, we can set a key and value. 

The "key" is used as the index as to where to find a value in memory. 

## HASH FUNCTION

A function that generates a value of fixed length for each input it receives

Given an input, the function generates a random pattern called a "hash".

Given a hash, the input is "hashed" or serialized in secret.

Example:
    Input = "Hello"
    Output = "j30q28t40nfoenw"

** Given the same input, the hash will always return the same output. 

## Hash Function Operations + BIG O

### Insert O(1)
### Lookup O(1)
### Delete O(1)
### Search O(1)

Hashes are not ordered, so we do not have to shift indices. 

Data is submitted randomly; the addresses are in order; not the key-value pairs.

Maps, which are a type of hashes, maintain order.

Sets, which are a type of hashes, only store the keys; not the key AND values. 

## Hash Collisions

When multiple key-value pairs are stored at the same address space. 

With hash tables, we cannot avoid collisions -- because we have limited space/memory and a lot of data. 

Hash collisions slow down are ability to access data. 

Hash collisions => linked lists

BIG O O(n/k) where k = size of hash table

## No Concept Of Order





