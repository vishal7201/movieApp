$(document).ready(function(){
    $('#btnSearch').on('click',function(){
        $('#results').html("");
        var title=$("#search").val();
          $.getJSON('http://www.omdbapi.com/?s='+title,function(json){
                displayResult(json);
              });
    });
    function displayResult(data){
      if(data["Response"]=="False")
      {
        alert(data["Error"]);
      }
      else
      {
        var movieArray=data["Search"];
        $("#tempelate").tmpl(movieArray).appendTo("#results");
      }
    }
});
