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



/////////////////////////////////// IF ELSE /////////////////////////////////////////

var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married !');
} else {
    console.log(name + ' will hopefully marry soon !');
}


isMarried = true;

// if(isMarried) {
//     console.log('YES!');
// } else {
//     console.log('NO!');
// }

if(isMarried) {
    console.log('YES!');
}

// Js does Type coercion
if (23 == "23") {
    console.log('Something to print...');
}

// Js doesnt do Type coercion, it sees that the 23 is as number ans "23" as string
if (23 === "23") {
    console.log('Something to print...');
}

