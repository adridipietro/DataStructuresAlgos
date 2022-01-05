// a Binary Tree Node has a value property, left property and right propery

class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(value){
        // instantiate new instance of Node class; pass in value [x]
        // make new node child of root node if root node exists [x]
        // make new node the root node if tree is empty [x]
        // set left node property [x]
        // set right node property [x]

        /// make new node child of root node if root node exists [x]
        const newNode = new Node(value)
        // make new node child of root node if root node exists [x]
        if (this.root === null){
            this.root = newNode
        } else {
            // make new node the root node if tree is empty [x]
            let currentNode = this.root
            while(true){
                if(value < currentNode.value){
                    // LEFT

                    // if the currentnode doesnt have a left child node, set it
                    if (!currentNode.left){
                        currentNode.left = newNode
                        return this
                    } 
                    currentNode = currentNode.left

                } else if ( value > currentNode.value){
                    // RIGHT

                    // if the currentnode doesnt have a right child node, set it
                    if (!currentNode.right){
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }

    }

    lookup(value){
        // return the node 

    }

    remove(value){

    }
}

const tree = new BinarySearchTree()