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
        if (this.length === 0){
            this.top = newNode
            this.bottom = newNode
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length++
        return this
        
    }
    // remove the top node of the stack
    pop(){

    }
}

const myStack = new Stack()