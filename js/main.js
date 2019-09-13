// createJokeHTML creates a string from an object that is being passed through it.
function createJokeHTML(jokeObject){
    let jokeHTMLString = `
        <div> 
        <p>${jokeObject.joke}</p>
        </div>
        `
        return jokeHTMLString;
    }

// Empty div on the HTML document. Ready to hold the object from createJokeHTML whenever it's passed to it.
const jokeContainer = document.querySelector("#jokesOnDom")

// addJokeToDom takes the result of jokeHTMLString and adds it to the empty container.
let addJokeToDom = (jokeHTMLString) => {
    jokeContainer.innerHTML = jokeHTMLString;
}

// API fetch function
function getJoke () {
 fetch(`https://icanhazdadjoke.com/`, {
         method: "GET",
         headers: {
             "Accept": "application/json"
         }
         })
             .then(response => response.json())
             .then(parsedResponse => {
                 addJokeToDom(createJokeHTML(parsedResponse));
                 
         })
        }

// Event listener waiting for the "click" to generate a new joke.
document.querySelector(".jokeButton").addEventListener("click", event => {
    getJoke()
})