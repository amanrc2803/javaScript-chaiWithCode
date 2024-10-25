/* The promise object is eventual completion of 
future of an asyncronous operation & it's resulting value.

handling a future value or result in asyncronous manners.
fetch('https://something.com').then().catch().finally()

promises will consume under .then().catch() or .finnally() block
response will come under .then()
error will goes under .catch()
& finally will handle all thing either error or non-error response.

*/
/*
const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task 1 is compelete");
        //resolve()
        reject();
    },1000);
})


promiseOne.then(()=>{
    console.log("promise complete");
})
.catch(()=>{
    console.error("Something went wrong");
})
.finally(()=>{
    console.log(" I am free mind to run anyway ");
})


const promiseTwo = new Promise((resolve,reject)=>{
     setTimeout(()=>{
        console.log("Async Task 2 is completed");
        
        resolve();
    }, 5000);

});

promiseTwo.then(()=>{
    console.log("Task is resolved with promiseTwo");
})
.catch(()=>{
    console.error("something went wrong in promises");
})
.finally(()=>{
    console.log("don't feel alone i am with you my bro");
});


const promiseThird = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Async 3rd is going for execution queue");
            resolve({
                name: " Aniket Chauhan",
                rollNo: 7,
                gmail: "technostack@gmail.com",
                "address" : "Near by Koperkhairane",
            });

        },1000);
});

promiseThird.then((userInfo)=>{
    console.log("Promise 3rd is getting resolved with user info"+ userInfo.name,userInfo["address"]);
})
.catch(()=>{
    console.error("Oh! error aa gaya");
})
.finally(()=>{
    console.log("Tension na lo Vikas bhai aap bhi aa jao");
})

*/

/*
const promiseFour = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let error=false;
            if(!error){
                resolve({
                    username: "berojgarInsaan",
                    password: "crackedInterview"
                })
            } else{
                reject("Something went wrong");
            }
            
        },1000);
})

promiseFour
     .then((user) => {
         console.log(user);
         return user; 
     })
     .then((user) => {    // chain for then statement to achieve the return value for next iteration.
         console.log(user.username + "," + user.password);
     })
     .catch((error) => {
         console.error(error);
     })
     .finally(()=>{
        console.log("Promise is getting either resolved or rejected.");

     })


 // Promise using Async or Await
 
 
 async function consumePromiseFive() {
    
    try {
        const response = await promiseFive
        console.log(response())
    } catch (error) {
        console.log(error)
    }
 }
 
 consumePromiseFive() 


 async function getAllUser(){

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        //console.log(response);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('E', error)
    }
 }

 getAllUser()

 */

 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
    return response.json();
 })
 .then((data)=>{
    console.log(data);
 })
 .catch(()=>{
    console.error("Something Went Wrong");
 })
 .finally(()=>{
    console.log("It can be resolve or reject based on fetch data.")
 })