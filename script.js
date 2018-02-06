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

// var heightRene = 170;
// var heightTonny = 195;

// var ageRene = 36;
// var ageTonny = 29;

// var scoreRene = heightRene + 5 * ageRene;
// var scoreTonny = heightTonny + 5 * ageTonny;

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

// var heightMary = 158;
// var ageMary = 31;
// var scoreMary = heightMary + 5 * ageMary;

// if (scoreRene > scoreTonny && scoreRene > scoreMary) {
//     console.log('Rene wins the game with ' + scoreRene + ' points!');
// } else if (scoreTonny > scoreRene && scoreTonny > scoreMary) {
//     console.log('Tonny wins the game with ' + scoreTonny + ' points!');
// } else if (scoreMary > scoreRene && scoreMary > scoreTonny) {
//     console.log('Mary wins the game with ' + scoreMary + ' points!');
// } else {
//     console.log('It\'s draw.');
// }



//////////////////////////////// FUNCTION //////////////////////////////////////


// function calculateAge(yearOfBirth) {
//     var age = 2016 - yearOfBirth;
//     return age;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1969);
// var ageMary = calculateAge(1948);
// console.log(ageMary);


// function yearsUntilRetirement(name, year) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement >= 0) {
//     console.log(name + ' retires in ' + retirement + ' years');
//     } else {
//         console.log(name + ' is already retired');        
//     }
// }

// yearsUntilRetirement('John', 1990);
// yearsUntilRetirement('Mike', 1969);
// yearsUntilRetirement('Mary', 1948);


// //////////////////////////////// STATEMENTS and EXPRESSIONS //////////////////////////////////////

// function someFunction(par) {
//     // Code
// }

// var someFunction(par) {
//     //ode
// }

// // Expression = it produces something/output/outcome
// 3 + 4;
// var x = 3;

// // Statements = Performs an action, but it doesn't produce an immediate value
// // there is nothing that it stores as result of this
// if (x === 5) {
//     // Do something
// }

// // In short : an expression is meant to produce a value while statement is just meant to do some actions to perform something


// //////////////////////////////// ARRAY //////////////////////////////////////

// var names = ['John', 'Jane', 'Mark'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[2]);
// names[1] = 'Ben';
// console.log(names);

// var john = ['John', 'Smith', 1990, 'driver', false];

// // Function PUSH = Add element to the last array
// john.push('blue');

// // UNSHIFT = Add element to the first array
// john.unshift('Mr.');

// // POP = Remove last alement in array
// john.pop();

// // SHIFT = Remove first alement in array
// john.shift();

// console.log(john);

// // Index of = One of the useful function of this function is to find if the element is or not in the array
// // alert(john.indexOf('Smith'));

// if (john.indexOf('teacher') === -1) {
//     console.log('John is NOT a teacher');
// }

// //////////////////////////////// OBJECTS //////////////////////////////////////


// // 1st way of creating an object
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     yearofBirth: 1990,
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john.lastName);
// console.log(john['lastName']);

// var xyz = 'job';
// console.log(john[xyz]);

// john.lastName = 'Miller';
// john['job'] = 'programmer';

// console.log(john);


// // 2nd way of creating an object

// var jane = new Object();
// jane.firstName = 'Jane';
// jane.lastName = 'Smith';
// jane['yearOfBirth'] = 1969;
// jane['job'] = 'retired';
// jane['ismarried'] = true;

// console.log(jane);


//////////////////////////////// OBJECTS and METHODS //////////////////////////////////////


// Version 01
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    // Functions expression
    // calculateAge: function(yearOfBirth) {
    //     return 2016 - yearOfBirth;
    // }

    calculateAge: function() {
        return 2016 - this.yearOfBirth;
    } 
};


// console.log(john.family[2]);
// console.log(john.calculateAge(1970));
console.log(john.calculateAge());

// storing the value into the varibale

var age = john.calculateAge();
john.age = age;

console.log(john);

*/

/*
// Version 02
var john = {
    firstName: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        // return 2016 - this.yearOfBirth;
        this.age = 2016 - this.yearOfBirth;
    } 
};

john.calculateAge();
console.log(john);





var mike = {
    yearOfBirth: 1950,
    calculateAge: function() {
        // return 2016 - this.yearOfBirth;
        this.age = 2016 - this.yearOfBirth;
    } 
};

mike.calculateAge();
console.log(mike);

*/






///////////////////////////////////////////////// LOOP //////////////////////////////////

// A loop example with FOR
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}


var names = ['Rika', 'Zulfiqar', 'Maesaroh', 'Yudha', 'Erna', 'Siman', 'Simon'];

// Print from first to last
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// print from last to first
for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}

*/


// While loops

var names = ['Rika', 'Zulfiqar', 'Maesaroh', 'Yudha', 'Erna', 'Siman', 'Simon'];

var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}