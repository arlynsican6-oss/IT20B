class Array{

    constructor(initialData = []){
        this.data = {};
        this.length = 0;

        //Assign element to index
        for(let i=0; i<initialData.length; i++){
            this.data[i] = initialData[i];
            this.length++;
        }
    }

    traverse(){
        let output = "";

        for(let i=0; i<this.length; i++){
            output += this.data[i] + " ";
        }

        console.log(output);
    }

    

}

//

arr1.Traverse();

arr2 = new Array([4,3,2]);

arr2.traverse();

arr1.insert(0,50);
arr1.traverse();