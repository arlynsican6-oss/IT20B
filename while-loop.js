/*

//desc
i = 5;

while (i>=1){
    console.log(i);
    i--;
}


//Asc

i =1;
while (i<=5){
    console.log(i);
    i++;
}




//Online Asc
output = "";
i =1;

while (i<=5){
    output += output + " ";
    i++;
}

console.log(output);



//Online Desc
output = "";
i =1;

while (i<=5){
    output += output + " ";
    i++;
}

console.log(output);

*/

arr=[4,2,3];
output = " ";
i=0;

while(i<=arr.length-1){
    output += arr[i] + " ";
    i++;
}

console.log(output);