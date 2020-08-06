// Imports at the top of the file!
// We never nest imports inside blocks of code!
import axios from 'axios'

// 👉 TASK 1- Test out the following endpoints:



//     https://lambda-times-api.herokuapp.com/friends
//     https://lambda-times-api.herokuapp.com/friends/1
//     https://lambda-times-api.herokuapp.com/quotes
//     https://lambda-times-api.herokuapp.com/cards
//     https://lambda-times-api.herokuapp.com/breeds
//     https://dog.ceo/api/breeds/image/random

//    * With HTTPie (command-line tool)
//    * With Postman (tool with GUI)
//    * With Chrome
//    * With JS using the native fetch

// function handleSucess(something){
//   debugger
// }

// fetch('https://lambda-times-api.herokuapp.com/friends')
//   .then(handleSucess)
  

console.log('about to request')
fetch('https://lambda-times-api.herokuapp.com/friends') // returns a promise, but not the data that we want //dont need to set it to a variable
  .then(response =>{
    console.log('about to parse the response body')
    return response.json() // returns another promise (same as fetch itself)
  })
  .then(parsedResponse => {
    console.log('the parsed body is here')
    console.log(parsedResponse)
  })
  .catch(error => { //if soemthing fail catastrophically, this callback will be invoked by chrome
    debugger // leave a breakpoint at catch at all time during developement
  })
console.log('finished requesting')

// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 
const entryPoint = document.querySelector('.entry')


// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.
function dogCardMaker({ imageURL, breed }) {

  // instantiating the elements
  const dogCard = document.createElement('div')
  const image = document.createElement('img')
  const heading = document.createElement('h3')
  // setting class names, attributes and text
  heading.textContent = `Breed: ${breed}`
  image.src = imageURL
  image.classList.add('dog-image')
  dogCard.classList.add('dog-card')
  // creating the hierarchy
  dogCard.appendChild(image)
  dogCard.appendChild(heading)
  // adding some interactivity
  dogCard.addEventListener('click', () => {
    dogCard.classList.toggle('selected')
  })
  // never forget to return!
  return dogCard
}


// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Proyects with npm: install it with npm and import it into this file
// console.log(axios)
// axios.get('https://lambda-times-api.herokuapp.com/breeds')
//   .then(stuff =>{
//     debugger
//   })
//   .catch(err =>{
//     debugger
//   })

// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console

// test the enpoint first
axios.get('https://dog.ceo/api/breed/mastiff/images/random/5')
  .then(response => { // in the case of axios, the future data is an object with a 'data' prop (among others)
  })
  .catch(errror =>{ //404 will fall here with axios
    debugger
  })


// 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)


// 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`


// 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// or request them from https://lambda-times-api.herokuapp.com/breeds
// and loop over them, fetching a dog at each iteration
