// Name of Student: Manisha R More.
/*
PROBLEM 1 
You are provided with a number, "N". Find its factorial.
Input Description: 
A positive integer is provided as an input.
Output Description: 
Print the factorial of the integer.
Sample Input : 5 
Sample Output : 120 
*/

var fact = 1;
var n = 5;
while (n >= 1) {
    fact = fact * n;
    n--;
}
console.log("Factorial of 5 is:", fact);

// Output :-> Factorial of 5 is: 120

/*
PROBLEM 2 
You are given with a number "N", find its cube.
Input Description: 
A positive integer is provided as an input.
Output Description: 
Find the cube of the number.
Sample Input : 2 
Sample Output : 8
*/

var cube;
var n = 2;
cube = n * n * n;
console.log("Cube of 2 is:", cube);

// Output :-> Cube of 2 is: 8

/*
PROBLEM 3
The area of an equilateral triangle is where "a" represents a side of the
triangle. You are provided with the side "a". Find the area of the equilateral triangle.
Input Description:  
The side of an equilateral triangle is provided as the input.
Output Description:  
Find the area of the equilateral triangle and print the answer up to 2 decimal places
after rounding off.
Sample Input : 20
Sample Output : 173.21
*/

let a = 20;
if (a <= 0) {
    console.log("Number is Invalid")
}
else {
    let b = Math.sqrt(3);
    a = b * a * a;
    a = a / 4;
    console.log("Area is:", a);
}

// Output :-> Area is: 173.2050807568877

/*
PROBLEM 4
You will be provided with a number. Print the number of days in the month
corresponding to that number.
Note: In case the input is February, print 28 days. If the Input is not in valid range
print "Error".
Input Description:  
Input n -> month number
Output Description:  
Find the days in the month corresponding to the input number. Print Error if the input
is not in a valid range.
Sample Input : 8
Sample Output : 31
*/

switch (n = 1) {
    case 1:
        a = "28 days";
        break;
    case 2:
        a = "30 days";
        break;
    case 3:
        a = "31 days";
        break;
    default:
        a = "Error";

}
console.log("Days in February:", a);

// Output :-> Days in February: 28 days

/*
PROBLEM 5
You are given with a number A i.e. the temperature in Celcius. Write a program to
convert this into Fahrenheit.
Note: In case of decimal values, round-off to two decimal places.
Input Description:
A number is provided in Celcius as the input of the program.
Output Description:
The output shall be the temperature converted into Fahrenheit corresponding to the
input value print up to two decimal places and round off if required.
Sample Input: 12
Sample Output: 53.60
*/

var cel = 12;
var fah = cel * (9 / 5) + 32;
console.log("Fahrenheit is:", fah);

// Output :-> Fahrenheit is: 53.6

/*
PROBLEM 6
Write a code to get an integer N and print the sum of values from 1 to N.
Input Description:  
A single line contains an integer N.
Output Description:  
Print the sum of values from 1 to N.
Sample Input : 10
Sample Output : 55
*/

var n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("The Sum of 1 to 10 is:", sum);

// Output :-> The Sum of 1 to 10 is: 55


/*
PROBLEM 7
You are provided with a number "N", Find the Nth term of the series: 1 , 4, 9, 16, 25,
36, 49, 64, 81, .......
(Print "Error" if N = negative value and 0 if N = 0).
Input Description:  
An integer N is provided to you as the input.
Output Description:  
Find the Nth term in the provided series.
Sample Input : 18
Sample Output : 324
*/

function Nthseries(no) {
    if (no <= 0) {
        console.log("Error");
    }
    else if (no == 0) {
        console.log("0");
    }
    else {
        var j;
        for (let i = 1; i <= no; i++) {
            j = i * i;
        }
        return j;
    }
}
console.log("Nth Term of Provided Series:", Nthseries(18));

// Output :-> Nth Term of Provided Series: 324

/*
PROBLEM 8
- Let "A" be a string. Remove all the whitespaces and find it's length.
(Print "Error" if N = negative value and 0 if N = 0).
Input Description:  
A string is provide as an input
Output Description:  
Remove all the whitespaces and then print the length of the remaining string.
Sample Input : Lorem Ipsum
Sample Output : 10
*/

let str = "Lorem Ipsum       ";
console.log("Before Trim length is:", str.length);
const m = str.trim();
console.log("After trim length is:", m.length);

/* Output :->
 Before Trim length is: 18
 After trim length is: 11  */

/*
PROBLEM 9
You are given the coefficients of a quadratic equation in order A, B & C.
Where A is the coefficient of X2, B is the coefficient of X and C is the constant
term in the most simplified form.
Example: For X2 + 5X + 6 = 0, you are given the input as: 1 5 6.
Write a program to find all of the roots of the quadratic.
Note: The output should be up to 2nd decimal place (round off if needed) and in case
of a recurring decimal use braces i.e. for eg: 0.33333..... => 0.33.
Note: Use Shri Dharacharya's Method to solve i.e. X = {-b + √(b² - 4ac) } / 2a & {-
b-√(b² -4ac)} / 2a

Input Description:  
Three numbers corresponding to the coefficients of x(squared), x and constant are
given as an input in that particular order
Output Description:  
Print the two values of X after rounding off to 2 decimal places if required.
Sample Input: 1 5 6
Sample Output: -2.00 -3.00
*/

var p = 1;
var q = 5;
var r = 6;
var z = Math.sqrt((q * q) - 4 * p * r)
z = -q + z;
z = z / 2 * p;

var y = Math.sqrt((q * q) - 4 * p * r)
y = -q - y;
y = y / 2 * p;

console.log("Two values of X is:", z, y);

// Output :-> Two values of X is: -2 -3

/*
PROBLEM 10 
Loki wants to steal the tesseract but in order to do so, he has to rearrange the elements 
in an array in a specific manner which is mentioned in a clue. The clue says ‘cursed 
are the odd and sorted are the even’. Loki manages to decode the clue which translates 
to “sort the even positioned elements of an array, starting from the element at index 0, 
in ascending order”. Manipulate the array so as to help Loki steal the tesseract.
Input Description: 
Size of the array followed by the elements of the array
Output Description: 
Even index array elements sorted in ascending order
Sample Input :
5 3 9 1 44 6 
Sample Output :
1 9 3 44 6 
*/

arr1 = [3, 9, 1, 44, 6];
odd = [];
even = [];
arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    if (i % 2 == 0 || i == 0) {
        even.push(arr1[i]);
    } else if (i % 2 != 0 || i != 0) {
        odd.push(arr1[i]);
    }
}
even.sort();
for (let i = 0; i < even.length; i++) {
    arr2.push(even[i]);
    if (i < odd.length) {
        arr2.push(odd[i]);
    }
}
console.log("Sorted Array:", arr2);

// Output :-> Sorted Array: (5) [1, 9, 3, 44, 6]

/*
PROBLEM 11 
Given an array of N elements.find the number of occurences of each character and 
print it in the decreasing order of occurences, if 2 or more number occurs the same 
number of times, print the numbers in decreasing order.
Input Size : |N| <= 100000
Sample Testcase :
INPUT : 3 3 4 4 7 8
OUTPUT : 4 3 8 7
*/

function asc(myarr) {
    let map = new Map
    let c = 1;
    for (let i = 0; i < myarr.length; i++) {
        if (map.has(myarr[i])) {
            map.set(myarr[i], map.get(myarr[i]) + 1)
        }
        else {
            map.set(myarr[i], c)
        }
    }
    let narr = [...map];
    let tmp;
    for (i = 0; i < narr.length; i++) {
        for (j = i + 1; j < narr.length; j++) {
            if (narr[i][1] > narr[j][1]) {
                tmp = narr[i];
                narr[i] = narr[j];
                narr[j] = tmp;
            }
            else if ((narr[i][1] = narr[j][1])) {
                if (narr[i][0] > narr[j][0]) {
                    tmp = narr[i];
                    narr[i] = narr[j];
                    narr[j] = tmp;
                }
            }
        }
    }
    return narr;
}
myarr = [3, 3, 4, 4, 7, 8];
console.log(asc(myarr));

/* Output :-> (4) [Array(2), Array(2), Array(2), Array(2)]
0: (2) [7, 1]
1: (2) [8, 1]
2: (2) [3, 2]
3: (2) [4, 2]
length: 4  */

/*
PROBLEM 12 
Simi is learning about palindromic numbers. Her teacher gave him the task to count 
all palindromic numbers present in that range.Simi has told you about this and want 
your help. You design an algorithm in order to help simi. 
Input Description: 
You will be given a number ‘n’
Output Description: 
Print the count of all palindromic numbers till ’n’(inclusive)
Sample Input : 5 
Sample Output : 5 
*/

var n = 2;
function Palindrome(n) {
    return (5 * Math.pow(10, parseInt((n - 1) / 2)));
}
console.log("Palindrome of 5 is:", Palindrome(n));

// Output :-> Palindrome of 5 is: 5


/*
PROBLEM 13 
Ajay is given a series(In example).he gone through the series but unable to understand 
it properly,he has hired you.Your task is to understand the series and print the series 
2,6,12,20,30... .You are given with a number ‘n’. Find the nth number of series. 
Input Description: 
You will be given a number ‘n’
Output Description: 
Print the nth number of series
Sample Input : 5
Sample Output : 30
*/

var n = 5;
for (let i = 1; i <= n; i++) {
    var b = ((i * i) + i); //1*1= 1+1 =2 //2*2=4+2=6 //3*3=9+3=12 //4*4=16+4=20 //5*5=25+5=30
}
console.log("Nth Number of Series:", b);

// Output :-> Nth Number of Series: 30

/*
PROBLEM 14 
You are given with an array. Your task is to print the left rotated array after k 
opearations. Time:O(n) Extra Space: O(1) 
Input Description: 
First line contains two number ‘n’ and ‘k’.Next line contains n space separated 
numbers.
Output Description: 
Print the array as mentioned.
Sample Input : 1 2 3 4 5 6 7 
Sample Output : 4 5 6 7 1 2 3
*/

let arr = [1, 2, 3, 4, 5, 6, 7];
let x = arr.length;
// Function to leftRotate array multiple times
function leftRotate(arr, x, k) {
    //To get the starting point of rotated array 
    let mod = k % x;

    // Prints the rotated array from start position
    for (let i = 0; i < x; i++)
        console.log((arr[(mod + i) % x]) + " ");

}
let k = 3;
leftRotate(arr, x, k);

// Output :-> 4 5 6 7 1 2 3

/*
ROBLEM 15 
You are given a postfix expression. Evaluate the given expression and print the result. 
Input Description: 
The first line of the input is a string N, containing operators and numbers seperated by 
the single space which forms a postfix expression.
Output Description: 
Evaluate the post expression and print the result.
Sample Input : 5 3 1 * + 9 -
Sample Output : -1
*/

let exp = "5 3 1 * + 9 -";

function evaluatePostfix(exp) {
    let stack = []; // create a stack

    // Scan all characters one by one
    for (let i = 0; i < exp.length; i++) {
        let c = exp[i];
        if (c == ' ') {
            continue;
        }

        // If the scanned character is an operand (number here),extract
        // and Push it to the stack.
        else if (c >= '0' && c <= '9') {
            let n = 0;

            // extract the characters and store it in n
            while (c >= '0' && c <= '9') {
                n = n * 10 + (c - '0');
                i++;
                c = exp[i];
            }
            i--;

            // push the number in stack
            stack.push(n);
        }

        // If the scanned character is an operator, pop two elements
        // from stack apply the operator
        else {
            let val1 = stack.pop();
            let val2 = stack.pop();

            switch (c) {
                case '+':
                    stack.push(val2 + val1);
                    break;

                case '-':
                    stack.push(val2 - val1);
                    break;

                case '/':
                    stack.push(parseInt(val2 / val1, 10));
                    break;

                case '*':
                    stack.push(val2 * val1);
                    break;
            }
        }
    }
    return stack.pop();
}
console.log("Solution of Postfix Expression is:", evaluatePostfix(exp));

// Output :-> Solution of Postfix Expression is: -1