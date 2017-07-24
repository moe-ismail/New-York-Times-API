$(document).ready(function  (){
var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "65a9dda2f2414b3d966a836b6c01c94b"
});

 $.ajax({
  url: url,
  type: 'GET',
}).done(function(url) {
  console.log(url);
}).fail(function(err) {
  throw err;
});
});
var nytimes = [];
var num_results = nytimes.num_results;
for ( var i = 0; i < nytimes.length; i++) {
	num_results[i]
}
$(document).ready(function(){
    $("#hide").click(function(){
        $(".loader").hide();
    });
    $("#show").click(function(){
        $(".loader").show();
    });
});

