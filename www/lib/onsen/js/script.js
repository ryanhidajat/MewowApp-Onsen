$(document).on("pageinit", ".ui-page", function () {
	console.log('any page loaded');
jQuery(function($) {

    $.getJSON('http://mewow.dewitech.com/?json=get_recent_posts&callback=?&post_type=product&count=50')
        .success(function(response) {
			
		i = 0;
		while (i < 50) {
			
			$("#page1").append("<li class='ui-grid-a'><img src='" + response.posts[i].thumbnail + "' /><br /><a href='" + response.posts[i].slug + "' >" + response.posts[i].title + "</a><br>" + response.posts[i].content + "</li>");

			i++;
			}
        });
});


});

$( document ).delegate("#home-page", "pageinit", function() {    
	console.log('home page loaded');
	

});

//beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
//complete: function() { $.mobile.hidePageLoadingMsg() }, //Hide spinner
