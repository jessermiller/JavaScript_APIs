console.log("Hello World!\n==========\n");
const API_KEY = "Vq16vLRr0rBUxFcFWlvOFJHPS8S4CdTP";
let formSearch = document.querySelector("#searchForm");
let searchWord = document.querySelector("#searchWord");
let img = document.querySelector("img");


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

formSearch.addEventListener("submit", getGif);


 function getGif(event) {
    event.preventDefault();
     fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchWord.value}`)
     .then((res) => res.json())
     .then(updateDom)
     .catch(errHandler);
 }
function updateDom(result) {
    img.src = result.data.images.original.url;
    img.alt = result.data.title;
    img.title = result.data.title;
}


function errHandler(err) {
    console.error(err);
    document.querySelector("p").textContent = "Failed to fetch gif. Try again later"
}