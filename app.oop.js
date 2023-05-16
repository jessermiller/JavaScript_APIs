class GiphyAPI {
    GIPHY_URL= "https://api.giphy.com/v1/gifs/translate";
   API_KEY = "Vq16vLRr0rBUxFcFWlvOFJHPS8S4CdTP";
   


   constructor() {
    
    this.elements = {
        form: document.querySelector("#searchForm"),
        input: document.querySelector("#searchWord"),
        img: document.querySelector("img"),
       };
       this.elements.form.addEventListener("submit", this.submissionHandler)
     //  this.submissionHandler = this.submissionHandler.bind(this);
   }

   submissionHandler=(event) => {
    event.preventDefault();
    this.getGif()
 }

   getGif() {
    let term = this.elements.input.value;
    fetch(`${this.GIPHY_URL}$api_key=${this.API_KEY}&s=${term}`)
    .then(this.parseBody)
    .then(this.displayGif)
    .catch(this.errHandler);

    this.elements.input.value = "";

   }

  

   
   parseBody(res){
    return res.json();
   }
   displayGif=(resBody) =>{
    this.elements.img.src = resBody.data.images.original.url;
    this.elements.img.title = resBody.data.title;
   }
   errHandler(err) {
    console.error(err);
    //flashAlert
   }

}

new GiphyAPI();