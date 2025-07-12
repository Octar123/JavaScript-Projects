const readlineSync = require("readline-sync");
const kuler = require("kuler");

let score = 0;

const database = {
    data: [
        {
            question : ` 
What will be the output of the following code snippet?

const obj1 = {first: 20, second: 30, first: 50};
console.log(obj1);`,
            options : {
                a : "{first: 20, second: 30}",
                b : "{first: 50, second: 30}",
                c : "{first: 20, second: 30, first:50}",
                d : "Syntax Error",
            },
            correctAnswer : "b"
        },
        {
            question : `
What will be the output of the following code snippet?

let a = [1, 2, 3, 4, 5, 6];
var left = 0, right = 5;
var found = false;
var target = 5;
while(left <= right) {
   var mid = Math.floor((left + right) / 2);
   if(a[mid] == target) {
       found = true;
       break;
   }
   else if(a[mid] < target) {
       left = mid + 1;
   }
   else {
       right = mid - 1;
   }
}
if(found) {
   print("YES");
}
else {
   print("NO");
}`,
            options : {
                a : "YES",
                b : "NO",
                c : "Syntax Error",
                d : "None of the above"
            },
            correctAnswer : "a"
        },
        {
            question : `
            
What will be the output of the following code snippet?

print(typeof(NaN));`,
            options : {
                a : "Object",
                b : "Number",
                c : "String",
                d : "None of the above"
            },
            correctAnswer : "b"
        },
        {
            question : `
            
What will be the output of the following code snippet?

let s = "00000001111111";
let l = 0, r = s.length - 1, ans = -1;
while(l <= r) {
   var mid = Math.floor((l + r) / 2);
   if(s[mid] == '1') {
       ans = mid;
       r = mid - 1;
   }
   else {
       l = mid + 1;
   }
}
print(ans);`,
            options : {
                a : "8",
                b : "7",
                c : "0",
                d : "1",
            },
            correctAnswer : "b"
        },
        {
            question : `
What will be the output of the following code snippet?

const example = ({ a, b, c }) => {
 console.log(a, b, c);
};
example(0, 1, 2);`,
            options : {
                a : "0 1 2",
                b : "0 Undefined Undefined",
                c : "Undefined Undefined Undefined",
                d : "None of the above",
            },
            correctAnswer : "c"
        }
    ]
}

function checkAnswer(userAnswer, correctAnswer){
    if(userAnswer === correctAnswer){
        console.log(kuler("Correct Answer", "#16a34a"));
        score++;
    }else{
        console.log(kuler("Incorrect Answer", "#b91c1c"));
        console.log(kuler(`Correct Answer is ${correctAnswer}`, "#2563eb"));
    }
}

function showQuestionAndAnswer(database){
    for(let i = 0; i < database.data.length; i++){
        console.log(`\nQ.No. ${i+1} : ${database.data[i].question}\n`);
        console.log("Options:-");
        for(let key in database.data[i].options){
            console.log(kuler(`${key} : ${database.data[i].options[key]}`, "#93c5fd"));
        }
        let userAnswer = readlineSync.question("\nEnter Your Answer:- ").toLowerCase();
        checkAnswer(userAnswer, database.data[i].correctAnswer);
        console.log(kuler(`Your Score is :- ${score}`, "#fbbf24"));
    }
}

showQuestionAndAnswer(database);
