// Handle click on toggle search button
//		$('#toggle-search').click(function() {
//			$('#search-form, #toggle-search').toggleClass('open');
//			return false;
//		});

// Handle click on search submit button
//		$('#search-form input[type=submit]').click(function() {
//			$('#search-form, #toggle-search').toggleClass('open');
//			return true;
//		});

// Clicking outside the search form closes it
//		$(document).click(function(event) {
//			var target = $(event.target);
//      
//			if (!target.is('#toggle-search') && !target.closest('#search-form').size()) {
//				$('#search-form, #toggle-search').removeClass('open');
//			}
//		});

//$('.navigation').on('click', '.search-toggle', function(e) {
//  var selector = $(this).data('selector');
//
//  $(selector).toggleClass('show').find('.search-input').focus();
//  $(this).toggleClass('active');
//
//  e.preventDefault();
//});

$('.navigation').on('click', '.search-toggle', function (e) {
    var selector = $(this).data('selector');

    $(selector).toggleClass('show').find('.search-input').focus();
    $(this).toggleClass('active');

    e.preventDefault();
});

// Clicking outside the search form closes it
//$(document).click(function (event) {
//    var target = $(event.target);
//
//    if (!target.is('.search-toggle') && !target.is('.search-input')) {
//        $('.search-input').removeClass('open');
//        $('.navigation').removeClass('active');
//    }
//});
