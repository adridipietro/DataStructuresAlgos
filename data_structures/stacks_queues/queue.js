// Building a QUEUE using a LINKED LIST
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class queue {
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }
    // access first element of the queue
    peek(){
        return this.first
    }
    // add to the end of the queue
    enqueue(value){
        // instantiate new instance of class Node
        const newNode = new Node(value)
        // if the queue is empty, set first and last to value passed in
        if (this.length === 0){
            this.first = newNode
            this.last = newNode
        } else {
            // point the prev. last item's next value is the newNode
            this.last.next = newNode
            // update this.last to equal the newNode
            this.last = newNode
        }
        this.length++
        return this
    }
    // remove the first element of the queue
    dequeue(){
        // if the first node does not exist; meaning if the queue is empty, return null
        if (!this.first){
            return null
        }
        // if the queue only has one item (first === last), in addition to removing the first, set the last to null
        if (this.first === this.last){
            this.last = null
        }
        // the first now becomes the previous firsts' next value
        // decrement length and return this ( the queue )
        this.first = this.first.next
        this.length--
        return this

    }

}
