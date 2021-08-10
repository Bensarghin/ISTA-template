$(function () {
	$('[data-toggle="tooltip"]').tooltip();  
	var JsonObj=
			[{"work":"Management"},
			{"work":"Web designer"},
			{"work":"Network"},
			{"work":"Computer Designer"},
			{"work":"Architecture"},
			{"work":"Security"},
			{"work":"Health"},
			{"work":"Security"},
			{"work":"Engineering"},
			{"work":"Computer Developer"}];
	for (var i = 0; i < JsonObj.length ; i++) {
		$('.live-search-list').append("<li><a href='details.html'>"+ JsonObj[i].work +"</a></li>");
			}
$('.live-search-list li').each(function(){
$(this).attr('data-search-term', $(this).text().toLowerCase());
});
$('.live-search-box').on('keyup', function(){
var searchTerm = $(this).val().toLowerCase();
    $('.live-search-list li').each(function(){
    	if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
            $(this).show();
        } else {
            $(this).hide();
        }
	var sear=$('.live-search-box').val();
	if(sear==""){$('.live-search-list li').hide();}
    });
});

});
