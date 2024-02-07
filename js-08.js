/*using a loop, iterate through this array and console.log all of the people
write the command to remove "Greg" from the array
write the command to remove "James" from the array
*/
//1

const names  = ['Greg', 'Mary', 'Devon', 'James'];

let name = 0;

for(let name = 0; name < names.length; name++) {

    console.log(names);

}

//2

names.shift();

console.log(names);


//3
names.pop();

console.log(names);

//4

names.unshift("Matt");

console.log(names);

//5
names.push("Neha")

console.log(names);

//6

for(let name = 0; name < names.length; name++){

    if (name>1) {
        break; 
    }
    
console.log(names[name]);

//7
console.log(names.slice(2));
  
}
//8
let copiedNames = [names.slice(2)];

console.log(copiedNames);


//9

console.log(names.indexOf("Mary"));

//10

console.log(names.indexOf("Foo"));

//11


const names1 = ['Greg', 'Mary', 'Devon', 'James'];

//12
names1.splice(2, 1, 'Elizabeth', 'Artie');

console.log(names1);

//13

let withBob = names.concat('Bob'); 

console.log(withBob);