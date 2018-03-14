/*
console.log('Hello World');
*/

/*
var name = 'Yudha';
console.log(name);

var lastName = 'Yuki';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

/*
console.log(name + ' ' + age);
console.log(age + age);
*/



/*
var name = 'Yudha';
var age = 27;

var job, isMarried;
console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');



age = '29';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');


var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
*/


/*

var now = 2018;
var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);


var ageJohn = 30;
var ageMark = 30;


ageJohn = ageMark = (3+5) * 4 - 6;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);

*/

/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
    console.log(name+ ' is married!');
} else {
    console.log('Hopefully ' + name + ' will marry soon.');
}

isMarried = true;

/*
--------------------------------
if(isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}
--------------------------------
*/

/*
if(isMarried) {
    console.log('YES!');
}

if (23 === '23') {
    console.log('Print something...');
}
*/

/*
var age = 20;

if (age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age <= 30) {
    console.log('John is a young man.')
} else {
    console.log ('John is a man');
}


var job = 'teacher';

job = prompt('What foes John do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids');
        break;
    case 'driver':
        console.log('John drives a cab');
        break;
    case 'cop':
        console.log('John helps fight crime');
        break;
    default:
        console.log('John is jobless');
}
*/

/*
var johnHeight = 180;
var mikeHeight = 165;

var johnAge = 26;
var mikeAge = 29;

var johnScore = johnHeight + 5 * johnAge;
var mikeScore = mikeHeight + 5 * mikeAge;

------------------------------------------
if (johnScore > mikeScore) {
    console.log('Friend One is the winner with ' + mikeScore + ' points');
} else if (mikeScore > johnScore) {
    console.log('Friend Two is the winner with ' + mikeScore + ' points');    
} else {
    console.log('There is a draw');
}
-------------------------------------------

var marryHeight = 158;
var marryAge = 31;
var marryScore = marryHeight + 5 * marryAge;


if ((johnScore > mikeScore) && (johnScore > marryScore)) {
    console.log('John is the winner with ' + johnScore + ' points');
} else if ((mikeScore > johnScore) && (mikeScore > marryScore)) {
    console.log('Mike is the winner with ' + mikeScore + ' points');
} else if ((marryScore > johnScore) && (marryScore > mikeScore)) {
    console.log('Marry is the winner with ' + marryScore + ' points');
} else {
    console.log('It\'s a draw.');
}
*/



///////////////////// ----------- FUNCTION ------------ ///////////////////////
/*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMarry = calculateAge(1948);

// console.log(ageMarry);



function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' has already retired.');
    }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Marry', 1948);






// Expression ////////////////////
3 + 4 ;
var x = 3;

// ANother example
var someFunctions = function(par) {
    // code
}

// Statements //////////////////
if (x === 5) {
    // do something
}

// Another ex
function someFunctions(par) {
    // code
}
*/





///////////////////// ----------- ARRAY ------------ ///////////////////////
/*
var names = ['John', 'Mike', 'Marry'];

var years = new Array(1990, 1969, 1948);

console.log(names[2]);

names[1] = 'Ben';

console.log(names);


var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();

console.log(john);

// alert(john.indexOf('Smith'));

if (john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher');
}
*/



///////////////////--------- OBJECT -----------/////////////////////
/*
// 1st way fo creating an object
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);


// Data mutation
john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);


// 2nd way fo creating an object
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/


/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2016 - this.yearOfBirth;
    }
};

// console.log(john.family[2]);

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/

/*
// Version II
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);




var mike = {
    yearOfBirth: 1950,
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);
*/






///////////////////--------- LOOP -----------/////////////////////
/* 
for (var i = 0; i < 10; i++) {
    console.log(i);
}
*/


/*
var names = ['Rika', 'Zul', 'Mae', 'Yudha', 'Erna', 'Siman', 'Simon'];


// FOR LOOP
for (var i = 0; i < names.length; i++ ) {
    console.log(names[i]);
}

for (var i = names.length -1; i >= 0; i--) {
    console.log(names[i]);
}



// WHILE LOOP
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

for (var i = 1; i <= 5; i++) {
    console.log(i);

    if (i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);    
}

*/




////////////// ------------ CHALLANGE 2 --------- ///////////

/*
// 1
var years = [2001, 1985, 1994, 2014, 1973];

// 2
var ages = [];

// 3. Use Loop to fill the array with the ages of the persons
for (var i = 0; i < years.length; i++) {
    ages[i] = 2016 - years[i];
}

// 4. Use another loop to log into the console whether each person is of full age (18 or older)
// as well as their age
for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
        console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age');
    } else {
        console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age');        
    }
}
*/


// 5 Create a function called printFullAge which receives the vector of years
// As an argument, executes the step 2, 3, and 4.
// and return vector of true/false boolean values
// true if the person is full age (>=18) and false if not (<18)

var years = [2001, 1985, 1994, 2014, 1973];

function printFullAge(years) {

    // 2
    var ages = [];
    var fullAges = [];

    // 3. Use Loop to fill the array with the ages of the persons
    for (var i = 0; i < years.length; i++) {
        ages[i] = 2016 - years[i];
    }

    // 4. Use another loop to log into the console 
    // whether each person is of full age (18 or older)
    // as well as their age
    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age');    
            fullAges.push(false);    
        }
    }

    return fullAges;
}

// 6 Call the function with two different vectors
// and store the results in two variables: full_1 and full_2

var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);