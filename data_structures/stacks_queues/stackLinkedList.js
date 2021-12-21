// building a STACK using Linked List
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0
    }
    // access top node
    peek(){
        return this.top
    }
    // adds node to top of stack
    push(value){
        // create a const newNode; instantiate a new instance of class Node -- passing in the value
        const newNode = new Node(value)
        // if the stack is empty, the new node added is both top + bottom
        if (this.length === 0){
            this.top = newNode
            this.bottom = newNode
        // otherwise, set this.top to the newNode and set the previous top node to the current top node's next value
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }
        // increment length + return this (the stack)
        this.length++
        return this
        
    }
    // remove the top node of the stack
    pop(){
        // if the top node does not exist; meaning if the stack is empty, return null
        if (!this.top){
            return null
        }
        // if the stack only has one item (top === bottom), in addition to removing the top, set the bottom to null
        if (this.top === this.bottom){
            this.bottom = null
        }
        // the top now becomes the previous tops' next value
        // decrement length and return this ( the stack )
        this.top = this.top.next
        this.length--
        return this
    }
}

const myStack = new Stack()