<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
 
  <meta charset="utf-8">
  <title>Random Quote Generator</title>
  
  <link rel="stylesheet" href="css/theme.css">
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

  <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  <script>window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));</script>

  <script src="js/functions.js"></script>
</head>


  <body id="backdrop">



  <div id="wrapper">
    
    
    <div id="quote-box" class = "container-fluid">
      
      <div class="row">
        <div id ="quote" class="col-md-12 col-centered">
        
        </div>
      
        <div class="row">
          <div id="author" class="col-md-8 pull-right text-right">            
        
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 pull-left text-left">
            <a id="tweet" class="twitter-share-button" href="https://twitter.com/share" target="_blank"><i class="fa fa-twitter-square fa-3x" aria-hidden="true"></i></a>
          </div>
          <div class="col-md-6 pull-right text-right">
            <button id="newquote" class="btn btn-default">New Quote</button>
          </div>
        </div>
                  
      </div>
    </div>  
  
  </div>

 
  

</body>
</html>