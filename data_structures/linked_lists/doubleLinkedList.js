// DOUBLE LINKED LISTS
    // points to both the node before and after it
    // while a single linked list only points to the next node

    // double => allows us to traverse the list backwards, as well as forwards
    // double linked lists require more memory


class DoubleLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
    }
    append(value){
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this

    }
    prepend(value){
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this

    }
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
    insert(index, value){
        if ( index >= this.length){
            return this.append(value)
        }
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        const leader = this.traverseToIndex(index - 1)
        const follower = leader.next
        leader.next = newNode
        newNode.prev = leader
        newNode.next = follower
        follower.prev = newNode
        this.length++

    }
    remove(index){

    }
}


const myDouble = new DoubleLinkedList(10)
myDouble.append(1)
myDouble.prepend(33)
myDouble.insert(3, 12)

