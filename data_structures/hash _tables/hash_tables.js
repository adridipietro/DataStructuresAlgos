// Example hash table and accessing + inserting data

let user = {
    name: 'adri',
    age: 24,
    hasCats: true,
    saysHey: function(){
        console.log('Hey')
    }
}

user.age // O(1)
user.name // O(1)
user.saysBye('Bye') // O(1)



// Example hash table with Class syntax

class HashTable {
    // constructor receives a "size"
    constructor(size){
        // instantiate a new instance of Array
        // this array is going to hold the data for us
        this.data = new Array(size)
    }

    // hash function -- you need hash function to create hash table
    // this is going to generate a hash for us
    _hash(key){
        // declare + assign variable "hash" to 0
        let hash = 0
        // loop through the key; loops through each character of the key
        for (let i = 0; i < key.length; i++){
            // reassign hash to equal "hash (0)" + random integer multiplied by the index
            // and then use modular operator to make sure this hash remains in our data length.
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    // set method 
    set(key, value){
        // address reps where we want to store this info
        let address = this._hash(key)
        if (!this.data[address]){
            this.data[address] = []
            this.data[address].push([key, value])
            console.log(this.data)
        } 
        this.data[address].push([key, value])
        return this.data
    } // 0(1)

    // get method
    // trying to return only the value of the key
    get(key){
        let address = this._hash(key)
        const currentBucket = this.data[address]
        if (currentBucket){
            for (let i = 0; i < currentBucket.length; i++){
                // grab the first array + grab the first item within the array
                // if the first array item of the first array === key then do something
                if (currentBucket[i][0] === key){
                    // return the value of the key
                    return currentBucket[i][1]
                }
            }
        } // 0(1)
        return undefined
    }

    // loop through all the keys of the hash table + return them all
    keys(){
        const keysArray = []
        for (let i = 0; i < this.data.length; i++){
            if (this.data[i]){
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
    }
}

const myHashTable = new HashTable(50)
// 50 reps the amount of space we have to store different hashes/addresses

myHashTable.set('grapes', 100)
myHashTable.set('apples', 20)
myHashTable.set('oranges', 1)
myHashTable.get('grapes')





// _hash => the underscore just tells us that this function or method is "private" -- its scope is only within the class function
// given the same input, hash tables will always output the same data
// data lives in "buckets"

// hash tables can have 0(n) if the hash table has linked lists within
// iteration in hash tables can take a long time because it loops through the entire hashTable size