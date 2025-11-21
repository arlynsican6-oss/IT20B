/*
for(i=1 ;i<=5 ;i++){
    console.log(i);
}


output = "";

for(i=1 ;i<=5 ;i++){
    output += i + " ";
}

console.log(output);


output = "";

for(i=5 ;i<=1 ;i++){
    output += i + " ";
}

console.log(output);


reverse = "";
str = "Arlyn";

for(i=str.length-1 ; i>=0; 1--){
    reverse += str[i];
}

console.log(reverse);

output = "";
arr = [4,2,3];

for(i=0; i<arr.length; i++){
output += arr[i] + " ";
}

console.log(output);

*/



arr = [4,2,3];

function arrayTraverse(){

    output = "";
        for(i=arr.length-1 ; i>=0; i--){
            output += arr[i] + "";
        }
    console.log(output);



}

arrayTraverse(arr1);
arrayTraverse(arr2);
rrayTraverse(arr3);