//////////////////PROBLEM 1////////////////////

var name = "Tyler";
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler(name) {
    if (name === 'Tyler') {
      return true;
    }
    return false;
  }

isTyler(name);


//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName() {

  var name = prompt("Please enter your name");
  return name;

}
//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
  var userName = alert("Welcome, " + getName())
  return userName;
}

welcome();


//////////////////PROBLEM 4////////////////////

//What is the difference between arguments and parameters?

  // Arguments relate strictly to invocation. Parameters are just items
  // that you place into a function. Arguments
  //
  // var argument = "peter";
  //
  // function explanation(parameter) {
  //   return parameter;
  // }
  //
  // explanation(argument);

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  // 0, False, NaN, Undefined, "", and Null



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName(){
  return "Peter";
}



//Now save the function definition of myName into a new variable called newMyName

  function newMyName() {
  var newMyName = getName();
}

//Now alert the result of invoking newMyName

  alert(newMyName());


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn() {
    return function () {
      return "Peter"
    }
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.

  innerFn();
