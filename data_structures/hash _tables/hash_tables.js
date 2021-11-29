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
        let hash = 0
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }
}

// given the same input, hash tables will always output the same data
// data lives in "buckets"
