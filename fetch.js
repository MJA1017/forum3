//The fetch() method in JavaScript is used to 
//request to the server and load the information in the 
//webpages. The request can be of any APIs that returns 
//the data of the format JSON or XML. This method returns a promise.

//as defined by geeksforgeeks :D
import fetch from 'node-fetch';

let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos/1");
      
// fetchRes is the promise to resolve
// it by using.then() method
fetchRes.then(res => res.json()).then(d => {
        console.log(d)
    })

















