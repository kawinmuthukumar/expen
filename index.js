// // var myNumber=10
// // var myString="Kawin❤️"
// // console.log("Helloworld")
// // console.log(myNumber)
// // console.log(myString)


// // var myArray=[10,12,90,67]
// // console.log(myArray)

// // //object

// var student={
//     name:"Kawin",
//     rollno:"28",
// }
// // myNumber="Hello"
// // console.log(myNumber)


// // console.log(typeof typeof 110)


// // function sum(a,b)
// // {
// //     console.log("The sum of", a ,"and", b, "is:",a+b)
// // }
// // sum(12,30)


// // function calculator(a,b)
// // {
// //     function sum(a,b)
// //     {
// //         console.log("The sum of", a ,"and", b, "is:",a+b)   
// //     }
// //     function sub(a,b)
// //     {
// //         console.log("The Difference of", a ,"and", b, "is:",a-b)   
// //     }
// //     function mul(a,b)
// //     {
// //         console.log("The Multiplication of", a ,"and", b, "is:",a*b)   
// //     }
// //     function div(a,b)
// //     {
// //         console.log("The Division of", a ,"and", b, "is:",a/b)   
// //     }
// //     sum(a,b)
// //     sub(a,b)
// //     mul(a,b)
// //     div(a,b)
// // }


// // calculator(10,15)




// // //----> Anonymous function


// // var sum=function(a,b)
// // {
// //     return a+b
// // }
// // console.log(sum(10,12))

// // arrow function

// var sum=(a,b)=>
// {
//     return a+b;
// }
// console.log(sum(1,12))



// // fun1=higher order function   fun2=call back function
// // var fun1=(fun)=>{
// //     fun()
// // }

// // var fun2=()=>
// // {
// //     console.log("Hello India!")
// // }
// // fun1(fun2)

// // using return

// var fun1 = (factor)=>
// {
//     return (number)=>
//     {
//         return factor * number
//     }
// }
// var mulBy2=fun1(2)
// console.log(mulBy2(5))

// console.log(fun1(2)(5)) //function currying




// function a() {
//     console.log("Kawin \n");
// }


// setTimeout(a, 5000);



// function greet(name, callback)

// {
//     console.log("Preparing to greet.......");
//     setTimeout(function(){
//     callback("Welcome "+ name);
// },1000);
// console.log("Our honourable chief guest");
// }

// function disp(message)
// {
//     console.log(message);
// }

// greet("Kawin", disp);

// function a()
// {
//     var b=20;
//     console.log(b);
// }
// a();

// console.log(b);


// function outer()
// {
//     let message="Hello";

//     function inner()
//     {
//         console.log(message); // lexical scope         
//     }
//     inner();
// }
// outer();

// console.log(4+5+undefined) // naN not a number

// console.log(4+5+null)



// Hoisting (accessing the variables before inistialization)
// the 164 th line will be in temporary dead zone the var will have undefined in tdz
// console.log(a);

// var a=20;
// a="Kawin";


// var funcc= function()
// {
//     console.log("Hello");
// }
 
// funcc=10
// console.log(funcc)


// let a=10

// console.log(a)

// function findLongestWord(sentence) {
    
//     const words = sentence.split(/\s+/).map(word => word.replace(/[^\w]/g, ''));
    
//     let longestWord = "";
//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
    
//     return longestWord;
// }



// const sentence = "The quick brown fox jumped over the lazy dog.";
// console.log(findLongestWord(sentence));



// var arrvingTime=8
// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(arrvingTime===8)
//             {
//                 resolve("You are on time");
//             }
//             else{
//                 reject("You are late");
//             }

//     },5000)
    
// });

// myPromise
// .then((message)=>{
//     console.log(message);
// })
// .catch((error)=>{
//     console.log(error);
// });

// console.log("Hello")


// function fetchData()
// {
//     return new Promise((resolve , reject) => 
//     {
//         fetch("https://jsonplaceholder.typicode.com/todos/1")
//         .then((response)=> response.json())
//         .then((data)=>resolve(data))
//         .catch((error)=>reject(error));
//     });
// }

// fetchData()
// .then((data) =>  console.log(data))
// .catch((error) => console.log("Please check your network"));

// const func = (a,b) => a+b;
// console.log(func(10,20))

const Promise1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => 
        {
            console.log("Loading user data......");
            resolve("User data loaded");
        },10000);
    });
};

const Promise2 = (prevResult) => {
    return new Promise((resolve) => {
        setTimeout(() => 
        {
            console.log("Validation user pemissions......");
            resolve(prevResult+" -> permissions validated");
        },5000);
    });
};

const Promise3 = (prevResult) => {
    return new Promise((resolve) => {
        setTimeout(() => 
        {
            console.log("Accessing dashboard......");
            resolve(prevResult+" -> Dashboard  accessed");
        },2000);
    });

};

// Promise1()
// .then((result) => Promise2(result))
// .then((result) => Promise3(result))
// .then((finalResult) => 
// {
//     console.log("Final result:",finalResult);
// })

// Promise.all([Promise1(), Promise2(), Promise3()])
// .then(() =>console.log("Completed"))
// .catch(() =>console.log("Error"));



function order() {
    return {
        items: ['books', 'pen'],
        total: 800
    };
}

function placeOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Order placed successfully');
            resolve(order);
        }, 2000);
    });
}

function processPayment(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(order.total >= 100){
                console.log('Payment processed for order');
                resolve(order);               
            }
            else{
                reject("Failed payment");
            }
        }, 1500);
    });
}

function sendConfirmation(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Confirmation sent for order");
            resolve("Order confirmed");
        }, 1000);
    });
}

const products = order();
placeOrder(products)
    .then(order => processPayment(order))
    .then(order => sendConfirmation(order))
    .then(message => console.log(message))
    .catch(error => console.error(error));


let a=[1,2,3[1,2,3,4[5,9,10]]]
var lar=Math.max(a)
console.log(lar)

