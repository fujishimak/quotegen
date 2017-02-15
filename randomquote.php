<!DOCTYPE html>
<html>
<head>
<script src="//code.jquery.com/jquery-2.1.1.min.js"></script>
  <meta charset="utf-8">
  <title>Mashape Query</title>
  <script>
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
       	document.getElementById("output").innerHTML = data.quote; 
        },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "lVCCMNcV04mshM6VhRuhyWjyf5oFp1XCVpUjsndSIVCM8AyGPh"); // Enter here your Mashape key
    }
});
  

}

</script>
</head>
<body>

  <button onclick="doIt()">Run the request</button>
  <div id="output">The API request is:</div>
  
</body>
</html>