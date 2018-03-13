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