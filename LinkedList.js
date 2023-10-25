class LinkedList {
    constructor() {
        this._head = null;
        this._size = 0;
        this._tail = null;
    }

    prepend(data) { 
        const node = new Node(data, null);

        if (this._head == null)
        {
            this._head = node; 
            this._size++;
        } 
        else {
            node.next = this._head;
            this._head = node;
            this._size++;
        }
    }

    append(data) {
        if (this._head == null) this.prepend(data);
        else {
            let tmpNode = this._head;
            //find the last item and assing it to tmpNode
            while (tmpNode.next !== null) tmpNode = tmpNode.next;
            
            tmpNode.next = new Node(data, null);
            this._tail = tmpNode.next;
            this._size++;
        }
    }

    removeWithKey(key, node = this._head, prevNode = null) {
        //recursive base
        if (node.data === key) {
            // if the item to remove is the head
            if (prevNode == null) {
                this._head = node.next;
                this._size--;
                return;
            }

            prevNode.next = node.next;
            this._size--;
            if(prevNode.next == null) this._tail = prevNode;
            return;
        }
        //recursive call
        if(node.next !== null) this.removeWithKey(key, node.next, node)
    }

    remove(index) {
        if (this.head == null || index >= this._size) return;

        const tmpNode = this.at(index);
        const prevNode = this.at(index - 1);

        prevNode.next = tmpNode.next;
        this._size--;

    }

    shift() {
        if (this._head !== null) {

            this._head = this._head.next; 
            this._size--;
        } 
    }

    pop() {
        if(this._head == null) return;

        let tmpNode = this._head;
        let prevNode = null;
        //find the last item and assing it to tmpNode
        while (tmpNode.next !== null) {
            prevNode = tmpNode;
            tmpNode = tmpNode.next;
        } 

        prevNode.next = tmpNode.next;
        this._tail = prevNode;
        this._size--;
    }

    at(index) {
        if(this.head == null) return;

        let tmpNode = this.head;
        let count = 0;
        while (tmpNode !== null)
        {
            if(count == index) return tmpNode;

            tmpNode = tmpNode.next;
            count++;
        }

        return null;
    }

    insertWithKey(key, data) {
        if (this._head == null) return;

        let tmpNode = this._head;

        while (tmpNode.data !== key) {
            if (tmpNode.next == null) return;

            tmpNode = tmpNode.next;
        }

        const newNode = new Node(data, tmpNode.next);
        tmpNode.next = newNode;
        this._size++;
        if(newNode.next == null) this._tail = newNode;
    } 

    insert(index, data) {
        if (this._head == null || index > this._size) return;

        let tmpNode = this.at(index);
        let prevNode = this.at(index - 1);
        const newNode = new Node(data, tmpNode);
        prevNode.next = newNode;
        this._size++;
        if(newNode.next == null) this._tail = newNode;
    }

    contains(value) {
        if (this.head == null) return;

        let tmpNode = this.head;
        while (tmpNode.next !== null)
        {
            if (tmpNode.data === value) return true;
            tmpNode = tmpNode.next;
        }
        return false;
    }

    find(value) {
        if (this.head == null) return;

        let tmpNode = this.head;
        let count = 0;
        while(tmpNode !== null)
        {
            if (tmpNode.data === value) return count;
            tmpNode = tmpNode.next;
            count++;
        }
        return null;
    }

    toString() {
        if(this.head == null) return console.log("Empty List");

        let tmpNode = this.head;
        let string = '';
        while(tmpNode !== null)
        {
            string += `(${tmpNode.data}) > `;
            tmpNode = tmpNode.next;
        }
        
        console.log(`${string}(null)`);
    }

   get size() {
        return this._size;
    }

    get head() {
        return this._head;
    }

    get tail() {
        return this._tail;
    }
}

class Node {
    constructor(data, next = null)
    {
        this.data = data;
        this.next = next;
    }
}

const list = new LinkedList(); 
const first = "Am TheFirst";
const second = "Am The Second";
list.prepend(first);
list.append(second);
console.log(list);
