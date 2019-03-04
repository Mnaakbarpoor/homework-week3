// 1.1 Strings

// let myString = "hello,this,is,a,difficult,to,read,sentence";
// console.log(myString);

// 1.2

// console.log(myString.length);

// 1.3

// myString = "hello this is a difficult to read sentence";

// 1.4

// console.log(myString);

// 2 Arrays

// 2.1

// let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

// favoriteAnimals.push('turtle');

// 2.2

// console.log(favoriteAnimals);

// 2.3

// favoriteAnimals.splice(1, 0, "meerkat");

// 2.4

// console.log("I think the word meerkat comes between the two words blowfish and capricorn");

// 2.5

// console.log(favoriteAnimals);

// 2.6

// console.log( favoriteAnimals.length , "The array has a length of");

// 2.7

// for remove specific word
// favoriteAnimals.splice( favoriteAnimals.indexOf('giraffe'), 1 );

// 2.8

// console.log(favoriteAnimals);

// 2.9

// favoriteAnimals.splice(favoriteAnimals.indexOf('meerkat'),1);

// 2.10

// console.log("The item you are looking for is at index " , favoriteAnimals);


// more javascript

// 1

// function myf(x , y , z) {
//     sum = (x + y + z);
//     return sum;
// }

// myf(10 , 11 , 12);

// 2

// function colorCar(color){
//     console.log(`a ${color} car`);
// }
// colorCar("red");

// 3

// let myo = {};

// function myf(myo){
//     myo = {
//         name : "mona", country : "iran", age : 17
//     }
//     console.log(myo);
}

// 4

// code = 0;

// function vehicleType(color, code) {
//        if (code == 1) {
//           console.log(`a ${color} car`);
//        }
//        else if (code == 2) {
//           console.log(`a ${color} motorbike`);
//        };

// }

// 5

// if (3 === 3) {
//     console.log("yes")
// } else {
//     console.log("no")
// }

// 3 === 3 ? console.log('yes'): console.log('no');

// 6

// function vehicle(color , code , age){
//     if(code == 1 && age == 6 ){
//         console.log(`a ${color} user car`)
//     }
//     else if(code == 2 && age == 5){
//         console.log(`a ${color} new car`)
//     }
//     else if( code == 2 && age == 5){
//         console.log(`a ${color} old car`)
//     }else{
//         console.log('nothing')
//     }
// }

// 7

// let vehicle2 = []

// vehicle2[0] = "motorbike"
// vehicle2[1] = "caravan"
// vehicle2[2] = "bike"
// vehicle2[3] = "car"

// 8

// console.log(vehicle2[0])

// 9

// function vehicle(color , code , age){
//     if(code == 3 && age == 4){
//         console.log(`a ${color} new ${vehicle2[0]}`)
//     }
//     else if(code == 5 && age == 1){
//         console.log(`a ${color} new ${vehicle2[2]}`)
//     }else if(code == 2 && age == 3){
//         console.log(`a ${color} new ${vehicle2[1]}`)
//     }else{
//         console.log("nothing")
//     }
// }

// 10

// for(let x = 0 ; x <= 0 ; x++){
//     console.log(`Amazing Joe's Garage, we service ${vehicle2[x + 3]} , ${vehicle2[x+0]} , ${vehicle2[x + 1]} , ${vehicle2[x + 2]}.`)
}

// 11


// vehicle2.push("airplane")
// console.log(vehicle2)

// for(let x = 0 ; x <= 0 ; x++){
//     console.log(`Amazing Joe's Garage, we service ${vehicle2[x + 3]} , ${vehicle2[x+0]} , ${vehicle2[x + 1]} , ${vehicle2[x + 2]} and ${vehicle2[x + 4]}.`)
// }

// 12

// let myteachers = {}

// 13

// myteachers = {
//     teacher1:"Ahmed",
//     teacher2:"George",
//     teacher3:"Mark"
// }

// 14

// myteachers["languages"] = "HTML , CSS , JAVASCRIPT"
// console.log(myteachers)

// 15

// let x = [1,2,3]
// let y = [1,2,3]
// let z = y

// if(x == y){
//     console.log("true")
// }else{
//     console.log("false")
// }

// if(x === y){
//     console.log("true")
// }else{
//     console.log("false")
// }

// if(y == z){
//     console.log("true")
// }else{
//     console.log("false")
// }

// if(y ===z){
//     console.log("true")
// }else{
//     console.log("false")
// }

// 16

// let o1 = { foo: "bar" };
// let o2 = { foo: "bar" };
// let o3 = o2;

// console.log("I am o2" , o2)
// console.log("I am o3" , o3)

// o2 = { foo: "capucino"}

// console.log("I am o2" , o2)
// console.log("I am o3" , o3)

// console.log(o2, o3);

// 17

// let bar = 42;
// typeof typeof bar;
// console.log(bar)
