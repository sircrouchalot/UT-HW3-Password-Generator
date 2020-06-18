# UT-HW3-Password-Generator

My Password generator waits for the user to click the generate button which calls the writePassword() function, which in turn calls the generatePassword() function and assigns it's return value to a variable.

The generatePassword() function creates a prompt asking for the length of the password the user wants and parses it as an integer. It then creates a series of confirm prompts asking for different elements to the password (i.e. lower case, upper case, numbers, and special characters).

It then creates string variables of each of those criteria containing all possible chars. The function than checks if the user confirmed what prompts and assigns those strings to an array.

Then a for loop is run where a random number is generated to pull a random type string from the array, and assigns it to a variable. Then another random number is generated in order to pull a random character from the string that was pulled from the array. That random character is then pushed into a new array called 'pass'. The for loop runs out until i is equal to the length the user selected.

Then the created 'pass' array is split by the join function into a string. generatePassword() then returns that string.

That string is assigned to the variable 'password' in writePassword(), and is then assigned to the value of passwordText which replaces the placeholder text in the html file.