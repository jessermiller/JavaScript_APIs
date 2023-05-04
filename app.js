console.log("Hello World!\n==========\n");
const API_KEY = "Vq16vLRr0rBUxFcFWlvOFJHPS8S4CdTP";
let formSearch = document.querySelector("#searchForm");
let searchWord = document.querySelector("#searchWord");
let img = document.querySelector("img");


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

formSearch.addEventListener("submit", (event)=> {
    event.preventDefault()
    getGif()
})
function getGif() {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchWord.value}`)
    .then((res) => {
       return res.json();
    })
    .then((body) => {
        console.log(body);
        img.src = body.data.images.original.url;
        if (body.data.user && body.data.user.username){ img.alt = `${body.data.title} by ${body.data.user.username}`;
        img.title = `${body.data.title} by ${body.data.user.username}`;
    }
    
    })
    .catch((err) => {
        console.error(err);
    })
}