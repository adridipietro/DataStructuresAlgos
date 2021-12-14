// const basket = ['apples', 'pears', 'grapes']
// Pseudo-Code Linked List (from example above)
    // apples -> pears -> grapes --> null



// Example =>   10-->5-->16
// declaring + assigning object with some properties
/* let myLinkedList = {
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
} */

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
        // return this linked list ('this')
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

    prepend(value){
        // prepend => adding something to the beginning
        // create a new node with the value
        // need to change 'head' to point to the value
        // point head to the previous 'head' value
        // increase the length
        // return this linked list ('this')
        const newNode = {
            value: value,
            next: null
        }
        // our newNode is going to point to the first item in our linked list
        newNode.next = this.head
        // update the value of this.head to our newNode's value
        this.head = newNode
        this.length++
        return this
    }

    // print value of nodes in an array format
    printList(){
        // create empty array
        const array = []
        // set currentNode to the first item in LinkedList (the head)
        let currentNode = this.head
        // create a while loop; while the currentNode does not equal null do this:
        while (currentNode !== null){
            // push currentNode's value to the array
            array.push(currentNode.value)
            // and then set the currentNode to the property of next
            currentNode = currentNode.next
        }
        return array
    }

    // O(n)
    insert(index, value){
        // insert => add value at a specified location
        // change the next value to the adjacently right node
        // traverse linked list to seek index
        // shift indices?
        // increase the length
        // return this

        // checking params
        // if the index is greater than or equal to the list's length; just add it to the end of the list
        if (index >= this.length){
            return this.append(value)
        }

        const newNode = {
            value: value,
            next: null
        }

        // find the first node that the newNode will be adjacently right to
        const leader = this.traverseToIndex(index - 1)
        // save the reference to the pointer of the next node
        const holdingPointer = leader.next
        // update the pointer to the newNode
        leader.next = newNode
        // refer back to the saved reference and update the newNode's next to this node
        newNode.next = holdingPointer
        this.length++
    }

    // traverse also means "lookup"
    // O(n)
    traverseToIndex(index){
        let counter = 0
        let currentNode = this.head
        // keep traversing until the counter is equal to the index
        while (counter !== index){
            // keep moving the currentNode to the right
            currentNode = currentNode.next
            // increment the counter
            counter++
        }
        return currentNode

    }
    // O(n)
    remove(index){
        // check params
        // traverse through list to find node at that index
        // remove the value + the pointer
        // readjust pointers
        // decrement length
        // return this
        const leader = this.traverseToIndex(index - 1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length--
        return this
    }
    reverse(){
        // if there is only one node ; if there is no 'next' for the head
        if(!this.head.next){
            return this.head
        }
        let firstNode = this.head
        let secondNode = firstNode.next
        while(secondNode){
            const temporary = secondNode.next
            secondNode.next = firstNode
            firstNode = secondNode
            secondNode = temporary
            return this

        }
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 17)