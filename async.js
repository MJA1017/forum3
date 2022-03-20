//basic async function
const hellobello = async() => {
    var hello = await "Hello World";
    console.log(hello);
}

//just to show the order of which things will print
console.log(1); 
hellobello();
console.log(2);

//a little more complex async functinos
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
}

console.log('first');
asyncCall(); 
console.log('second');