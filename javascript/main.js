// Grab the input

//var input;

document.querySelector(".js-go").addEventListener('click', function(){
    var input =document.querySelector("input").value;
     //pushToDOM(input);
    var url = "http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=2fbDvjavuRyFFy1l45tKoSJ6EOg1AGeJ";
    abc(url);
   
});


document.querySelector(".js-userinput").addEventListener('keyup', function(e){

    var input = document.querySelector("input").value;

    // if the key ENTER is pressed...
    if(e.which === 13) {
        var url = "http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=2fbDvjavuRyFFy1l45tKoSJ6EOg1AGeJ";
        abc(url);
    }
    

});

// Do the data stuff with the API

function abc(url) {

//var url = "http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=2fbDvjavuRyFFy1l45tKoSJ6EOg1AGeJ";

//AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', url);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', function(e){

    var data = e.target.response;
    pushToDOM(data);
});

}

// Show me the GIFs

function pushToDOM(input) {


    var response = JSON.parse(input);
    var imageUrls = response.data;
    var container = document.querySelector(".js-container");
    
    imageUrls.forEach(function(image){

        var src = image.images.fixed_height.url;
        
        container.innerHTML += " <img src=\"" + src + "\" class=\"container-image\">";
        
    });
    

}

