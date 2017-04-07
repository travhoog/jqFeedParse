// RSS parser 

$('.rss-feed').each(function(){
  var whoseFeed = $(this).attr('id');
  var where = $(this).data('blog');
  var feed = where+"/tag/"+whoseFeed+"/feed/";

  $.ajax(feed, {
    accepts:{
        xml:"application/rss+xml"
    },
    dataType:"xml",
    success:function(data) {
        //Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript

        var feedItems = [];

        var monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];

        $(data).find("item").each(function () { // or "item" or whatever suits your feed
            var el = $(this);
            var feedItem = {};
            var theTitle = el.children("title")["0"].innerHTML;
            feedItem["title"] = theTitle;
            feedItem["pubDate"] = new Date(el.children("pubDate").text());
            feedItem["link"] = el.children("link").text();
            feedItem["description"] = el.children("description").text();

            if (feedItem["title"].toLowerCase().indexOf("around idaho") < 0) {
              feedItems.push(feedItem);
            }
        });

        for (item in feedItems) {
          var newItem = 
            "<li><p>"+
              "<a href='https://idaholabor.wordpress.com/"+ feedItems[item].link +"''>"+
                (feedItems[item].pubDate.getMonth() + 1) + "/" +
                feedItems[item].pubDate.getDate() + "/" +
                feedItems[item].pubDate.getFullYear().toString().substr(-2) + " - " +
                feedItems[item].title+
              "</a>"+
            "</p></li>"
          ;
          $("#"+whoseFeed).append(newItem);
        }

    },
    error: function(data) {
      console.log(data);
    }
  });
});