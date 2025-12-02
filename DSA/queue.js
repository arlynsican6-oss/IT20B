class Queue{
    
    constructor(){
        this.data = {};
        this.frontIndex = 0;
        this.rearIndex = 0;
    } 

    enqueue(element){
        this.rearIndex++;
        this.data[this.rearIndex] = element;
    }

    traverse(){
        let output = "";
        for(let i = this.frontIndex + 1; i <= this.rearIndex; i++){
            output += this.data[i] + " ";
        }

        return output;
    }

    is_empty(){
        return this.frontIndex > this.rearIndex;
    }

    front(){
        //Correction Statement
        if(this.is_empty()) return null;
        return this.data[this.frontIndex + 1];
    }

    size(){
        return this.rearIndex - this.frontIndex +1;
    }
}

//
let queue1 = new Queue();
console.log(queue.is_empty()); 
queue1.enqueue(4);
console.log("The Current queue size is: " + queue1.size());
queue1.enqueue(2);
console.log("The Current queue size is: " + queue1.size());
queue1.enqueue(3);
console.log("The Current queue size is: " + queue1.size());
console.log(queue.is_empty()); 
console.log(queue1.front());
