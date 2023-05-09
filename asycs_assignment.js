//1.Write an asynchronous function that accepts a message string and a delay time in milliseconds.
// The function should log the message to the console after the specified delay time.
function day_of_the_week(){
    console.log("Its a tuesday morning");
} 
setTimeout(day_of_the_week,4000)


//2.You have an array of user IDs and a function getUserData(id) that returns a Promise with user data 
//when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID 
//one by one, in sequence.
let userDetails=true
let promise=new Promise(function(resolve,reject){
 if(userDetails){
    setTimeout(()=>{resolve('user details available')},5000)
 }
 else{
setTimeout(()=>{reject('No user details')},5000)
 }
});
const getUserDetails=async()=>{
    let response=await promise;
     console.log({response});
}




// getUserDetails();
// async function fetchAndLogUserDataInSequence(userIds) {
//   for (const id of userIds) {
//     const userData = await getUserData(id);
//     console.log(userData);
//   }
//   fetchAndLogUserDataInSequence()

// }
// function fetchAndLogUserDataInSequence(userIds) {
//   let promiseChain = Promise.resolve();
//   userIds.forEach(id => {
//     promiseChain = promiseChain.then(() => getUserData(id)).then(userData => console.log(userData));
//   });
//   return promiseChain;
// }

//3.You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the 
//task is successful and rejects if there's an error. Write a function that calls performTask() and 
//logs a custom success message if the task is successful, and a custom error message if there's an error.

// function handleTask() {
//   performTask()
//     .then(() => {
//       console.log("Task successful!");
//     })
//     .catch(() => {
//       console.log("Task failed!");
//     });
// }



// function handleTask() {
//   performTask()
//     .then(() => {
//       console.log("Task successful!");
//     })
//     .catch(() => {
//       console.log("Task failed!");
//     })
//     .finally(() => {
//       console.log("Task complete!");
//     });
// }
