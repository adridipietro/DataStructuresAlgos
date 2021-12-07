// const basket = ['apples', 'pears', 'grapes']
// Pseudo-Code Linked List (from example above)
    // apples -> pears -> grapes --> null



// Example =>   10-->5-->16
// declaring + assigning object with some properties
let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}

class LinkedList {
    // instantiate new LinkedList with a value (to rep. the Head)
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
    }
    append(value){
        // append => add something to the end
        // create a new node with the value
        // need to change 'tail' to point to value I am appending
        // point tail to now the appended value (new node)
        // change value of tail to the newNode's value
        // increase the length
        // return this new node ('this')
        const newNode = {
            value: value,
            next: null
        }
        // point tail to the new node
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
}

const myLinkedList = new LinkedList(10)