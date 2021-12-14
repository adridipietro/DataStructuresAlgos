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
    insert(index, value){
        
    }
    remove(index){

    }
}


const myDouble = new DoubleLinkedList(10)
myDouble.append(1)
myDouble.prepend(33)
