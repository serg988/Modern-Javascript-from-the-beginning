// FOR LOOP

// for(let i = 0; i < 10; i++){
    
//     if(i === 2){
//      console.log(`2 is my favorite number`);
//      continue;
//     }

//     if(i === 5){
//         console.log('Stop the Loop');
//         break; 
//     }
//     console.log(`Number `+ i);
// }

// WHILE LOOP

// let i = 0;

// while (i < 10){
//     console.log(`Number` + i);
//     i++;

// }

// DO WHILE

// let i = 0;

// do {
//     console.log(`Number` + i); //DO WHILE will always run ONCE no matter what
//     i++;

// }

// while(i<10); // Condition

// LOOP THROUGH THE ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// forEach
// cars.forEach(function(car, index, array){ //use a forEach loop instead of for to loop through an Array
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

// MAP
// const users = [
//     {id:1, name:'John'},
//     {id:2, name: 'Sara'},
//     {id:3, name: 'Karen'},
//     {id:4, name: 'Benny'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// });
// console.log(ids);

// FOR IN LOOP
const user = {
    firstName: 'Benny',
    lastName: 'Chicas',
    age: 10
}

for(let x in user){
    console.log(`${x}: ${user[x]} `);

}