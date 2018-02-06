// /*
// var name ='John';
// console.log(name);

// var lastName = 'Smith';
// console.log(lastName);

// var age = 26;
// console.log(age);

// var fullAge = true;
// console.log(fullAge);
// */

// var name = 'John';
// var age = 26;

// // console.log(name + age);
// // console.log(age + age);

// var job, isMarried;

// job = 'teacher';
// isMarried = false;

// console.log(name + ' is a ' + age + ' ' + ' years old ' + job + '. Is he married? ' + isMarried + '.');

// age = 'Thirthy six';
// job = 'driver';

// console.log(name + ' is a' + age + ' ' + 'years old ' + job + '. Is he married? ' + isMarried + '.');

// // var lastName = prompt('What is the last name?');
// // console.log(lastName);

// alert(name + ' is a' + age + ' ' + 'years old ' + job + '. Is he married? ' + isMarried + '.');



// /////////////////////////////////// Operators /////////////////////////////////////////

// var now= 2016;

// var birthYear = now - 26;

// birthYear = now - 26 * 2;

// console.log(birthYear);

// var ageJohn = 30;
// var ageMark = 30;

// ageJohn = ageMark = (3 + 5) * 4 - 6;
// // ageJohn = ageMark = 26
// // ageJohn = 26;

// ageJohn++;
// // ageJohn = ageJohn + 1;

// ageMark*= 2;
// // ageMark = ageMark * 2;


// console.log(ageJohn);
// console.log(ageMark);



// /////////////////////////////////// IF ELSE /////////////////////////////////////////

// var name = 'John';
// var age = 26;
// var isMarried = 'yes';

// if (isMarried === 'yes') {
//     console.log(name + ' is married !');
// } else {
//     console.log(name + ' will hopefully marry soon !');
// }


// isMarried = true;

// // if(isMarried) {
// //     console.log('YES!');
// // } else {
// //     console.log('NO!');
// // }

// if(isMarried) {
//     console.log('YES!');
// }

// // Js does Type coercion
// if (23 == "23") {
//     console.log('Something to print...');
// }

// // Js doesnt do Type coercion, it sees that the 23 is as number ans "23" as string
// if (23 === "23") {
//     console.log('Something to print...');
// }

//////////////////////////////// BOOLEAN LOGIC AND SWITCH /////////////////////////////////////////

// var age = 35;

// if (age < 20) {
//     console.log('John is a teenager');
// } else if (age > 20 && age < 30) {
//     console.log ('John is a young man')
// }
// else {
//     console.log('John is a man.');
// }


// var job = 'teacher';

// job = prompt('What does John do?');

// switch (job) {
//     case 'teacher':
//         console.log('John teaches kids.');
//         break;
//     case 'driver':
//         console.log('John drives a cab');
//         break;
//     case 'cop':
//         console.log('John fights crimes.');
//         break;
//     default:
//         console.log('John does something else');
// }

var heightRene = 170;
var heightTonny = 195;

var ageRene = 36;
var ageTonny = 29;

var scoreRene = heightRene + 5 * ageRene;
var scoreTonny = heightTonny + 5 * ageTonny;

// if (scoreRene > scoreTonny) {
//     console.log('Rene wins the game with ' + scoreRene + ' points!');
// } else if (scoreTonny > scoreRene) {
//     console.log ('Tonny wins the game with ' + scoreTonny + ' points!')
// } 
// // else if () {

// // } 
// else {
//     console.log('There is a draw.');
// }

var heightMary = 158;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;

if (scoreRene > scoreTonny && scoreRene > scoreMary) {
    console.log('Rene wins the game with ' + scoreRene + ' points!');
} else if (scoreTonny > scoreRene && scoreTonny > scoreMary) {
    console.log('Tonny wins the game with ' + scoreTonny + ' points!');
} else if (scoreMary > scoreRene && scoreMary > scoreTonny) {
    console.log('Mary wins the game with ' + scoreMary + ' points!');
} else {
    console.log('It\'s draw.');
}