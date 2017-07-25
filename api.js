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

$(document).ready(function(){
    $("#hide").click(function(){
        $(".loader").hide();
    });
    $("#show").click(function(){
        $(".loader").show();
    });
});

jQuery('<div/>', {
  class:'pictures2',
  href: 'https://static01.nyt.com/images/2017/07/26/world/25USBriefing-Kushner/25USBriefing-Kushner-superJumbo.jpg',
  title:'Kushner Briefing',
  rel:'external',
  text:''
}).appendTo('.pictures2');

jQuery('<div/>',{
  class: 'text2',
  href:"https://www.nytimes.com/2017/07/25/us/politics/right-and-left-react-to-kushner-sessions-and-more.html",
 title:"Right and Left React to Kushner, Sessions and More",
 rel:'external',
 text:'Read about how the other side thinks: Writers from across the political spectrum react to the news on the Russian meddling investigation and more.'

}).appendTo('.pictures3');