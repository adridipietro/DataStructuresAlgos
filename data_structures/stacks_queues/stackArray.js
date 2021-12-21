// building a STACK using an ARRAY

class Stack {
    constructor(){
        this.array = []
    }
    // returns last added element
    peek(){
        return this.array[this.array.length - 1]
    }
    // add value to end of array
    push(value){
        this.array.push(value)
        return this
    }
    // remove latest added element
    pop(){
        this.array.pop()
        return this
    }
}