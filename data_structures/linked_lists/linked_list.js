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
}

const myLinkedList = new LinkedList(10)