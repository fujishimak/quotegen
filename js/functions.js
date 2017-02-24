function doIt() { 
 var output = $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {
    	

        document.getElementById("quote").innerHTML =  "<h1><i class='fa fa-quote-left' aria-hidden='true'></i> " + data.quote + "</h1>";
      
        document.getElementById("author").innerHTML = "<h3><i class='fa fa-pencil' aria-hidden='true'></i><em> " + data.author + "</h3>";

        // document.getElementById("tweet").data-text = data.quote + " --" + data.author;

        document.getElementById("tweet").href = "https://twitter.com/intent/tweet?text=" + data.quote + "%20--" + data.author + "&hashtags=" + "coolquotes";
        },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "lVCCMNcV04mshM6VhRuhyWjyf5oFp1XCVpUjsndSIVCM8AyGPh"); // Enter here your Mashape key
    }
});


}


function doPic(){

    var sel = 0;
    var category = ["buildings", "nature", "objects"];

    sel = Math.floor(Math.random()*3);

    // var nextUrl = "url('https://source.unsplash.com/category/" + category[sel] + "/1600x900')";

    document.getElementById("backdrop").style.backgroundImage = "url('https://source.unsplash.com/category/" + category[sel] + "/1600x900')";
    // $(backdrop).animate({
    //     opacity: 0.5,   
    //     backgroundImage: ""
    // }, 1000);


}


/*function fadeBg(){

// fadeout the background

} 


function fadeText(){


}
*/
//Check if DOM is safe to manipulate, run quote function and add event handler to buttons. $(document).ready is really deprecated...$(function(){...}); is now recommended. 
$(document).ready(function(){

    
    doIt();
    
    document.getElementById("newquote").addEventListener("click", doIt, true);
    document.getElementById("newquote").addEventListener("click", doPic, true);


});