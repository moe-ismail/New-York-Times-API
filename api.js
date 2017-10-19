function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}


$("#selectDropdown") .on("change", function(){
$('#newsblock').empty();
var val = $("#selectDropdown option:selected").val();
var url ="https://api.nytimes.com/svc/topstories/v2/"+ val +".json";

url += '?' + $.param({
'api-key': "b9c05d24b71e49bf9b72e24feaff8b0b"
});

$.ajax({
url: url,
method: 'GET',
}).done(function(result) {

            var count = 1;

for (var i=0; i<result.results.length; i++) {


          if (count <=12){


if (result.results[i].multimedia.length>0){

    var abstract = '<p class = "abstract">'+result.results[i].abstract +' </p> ' ;
    var link = result.results[i].url;
    var image = result.results[i].multimedia[4].url;
    var htmlElements =  '<a href="' +link +'">' +abstract + ' </a> ';

    var createDiv = $("<div></div>");
    createDiv.addClass('singlenews');
    $('#newsblock').append(createDiv);
    createDiv.css('background-image', "url(" + image + ")");
    createDiv.append(htmlElements);
    $('.logoAndDropdown').addClass('minified');



  console.log (count++);
}
} else{
break;
}
}

}).fail(function(err) {
throw err;
});

});

