/*
//Asc
i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
 


//Desc
i = 5;

do {
    console.log(i);
    i++;
} while (i <= 1);


output = "";
i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

console.log(output);

*/

arr = [4, 2, 3];


function arrayDoWhile() {
    output = "";

    i = 0;
    do {
        output += arr[i] + " ";
        i++;
    } while (i < arr.length);

console.log(output);
}

arrayDoWhile(arr1);