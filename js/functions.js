function doIt() { 
 var output = $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {
    	//
        //Change data.source to data.something , where something is whichever part of the object you want returned.
        //To see the whole object you can output it to your browser console using:
        //console.log(data);
/*        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);*/


       	/*document.getElementById("output").innerHTML =  data.quote + "\n-- " + data.author + ". " + w + "x" + h;
        document.getElementById("backdrop").style.backgroundImage = "url('https://source.unsplash.com/category/nature/1600x900')"; */

/*        document.getElementByID("quote").html = "<h1><i class='fa fa-quote-left' aria-hidden='true'></i> " + data.quote + "</h1>";
      
        document.getElementByID("author").html = "<h3><i class='fa fa-pencil' aria-hidden='true'></i><em> " + data.author + "</h3>";*/

        document.getElementById("backdrop").style.backgroundImage = "url('https://source.unsplash.com/random/1600x900')";

        document.getElementById("quote").innerHTML =  "<h1><i class='fa fa-quote-left' aria-hidden='true'></i> " + data.quote + "</h1>";
      
        document.getElementById("author").innerHTML = "<h3><i class='fa fa-pencil' aria-hidden='true'></i><em> " + data.author + "</h3>";

        },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "lVCCMNcV04mshM6VhRuhyWjyf5oFp1XCVpUjsndSIVCM8AyGPh"); // Enter here your Mashape key
    }
});

 /*var output = $.ajax({
    url: 'https://source.unsplash.com/category/nature/1600x900', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {
        //
        //Change data.source to data.something , where something is whichever part of the object you want returned.
        //To see the whole object you can output it to your browser console using:
        //console.log(data);
        document.getElementById("output").innerHTML =  data.quote + "\n-- " + data.author; 
        },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "lVCCMNcV04mshM6VhRuhyWjyf5oFp1XCVpUjsndSIVCM8AyGPh"); // Enter here your Mashape key
    }
});*/
 

}

//Check if DOM is safe to manipulate, run quote function and add event handler to buttons. $(document).ready is really deprecated...$(function(){...}); is now recommended. 
$(document).ready(function(){

    doIt();

    
    document.getElementById("newquote").addEventListener("click", doIt, true);


});