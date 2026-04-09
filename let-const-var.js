const accountId = 14456;
let accountEmail = "test@123.com";
var accountPassword = "new@123";
accountCity = "Pune"; 
let accountState;

//  trying to change value of const variable
// accountId = 2;

accountEmail = "hc@hc.com";
accountPassword = "hc@123";
accountCity = "Mumbai";

/*
Prefer not to use var keyword because of issues in block scope and functional scope.
*/

console.log(accountEmail, accountPassword, accountCity);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

 