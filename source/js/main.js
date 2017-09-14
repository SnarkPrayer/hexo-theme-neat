$(function(){
	$('.article-entry').each(function(i) {
	  $(this).find('img').each(function() {
	    if (this.alt) {
	      $(this).after('<span class="caption">' + this.alt + '</span>');
	    }
	  })
	})
	$('.navbar').click(function(){
		$('#container').toggleClass('sidenavopen')
	})
})
