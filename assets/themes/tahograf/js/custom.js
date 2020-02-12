$(function($) {
	contactsFixed()


	$('[data-fancybox]').fancybox({
		buttons: ["close"],
	});

	
	// Записаться на установку
	$('.tahograph-card .btn-red, .popup-setup-trigger').on('click', function(e) {
		e.preventDefault();

		var $this = $(this);
			title = $this.data('title'),
			desc1 = $this.data('desc1'),
			desc2 = $this.data('desc2'),
			$popup = $('.popup-setup');

		$.fancybox.open({
			'src': $popup,
			'type': 'inline',
			'touch' : {
				vertical : false,  // Allow to drag content vertically
				momentum : false   // Continuous movement when panning
			},
			'beforeShow': function() {
				$popup.find('h3').text(title);
				$popup.find('.desc1').text(desc1);
				$popup.find('.desc2').text(desc2);
				$popup.find('input[name="title"]').val(title);

				var now = new Date();
				now = now.toLocaleDateString('en-CA');
				$popup.find('input[name="date"]').val(now);
			}
		});
	});

	
	// Заказать карту
	$('.cards-item .btn-red').on('click', function(e) {
		e.preventDefault();

		var $this = $(this);
			title = $this.data('title'),
			desc1 = $this.data('desc1'),
			desc2 = $this.data('desc2'),
			$popup = $('.popup-card');

		$.fancybox.open({
			'src': $popup,
			'type': 'inline',
			'touch' : {
				vertical : false,  // Allow to drag content vertically
				momentum : false   // Continuous movement when panning
			},
			'beforeShow': function() {
				$popup.find('h3').text(title);
				$popup.find('.desc1').text(desc1);
				$popup.find('.desc2').text(desc2);
				$popup.find('input[name="title"]').val(title);
			}
		});
	});


	// Всплывающее окно при отправке форм
	document.addEventListener('wpcf7submit', function(event) {
		var formId = event.detail.contactFormId;

		$.fancybox.close();
		$.fancybox.open({
			'src': '.popup-thanks',
			'type': 'inline',
			'touch' : {
				vertical : false,  // Allow to drag content vertically
				momentum : false   // Continuous movement when panning
			}
		});
	}, false);


	if ($(document).width() > 767) {
		$('.nav-item.dropdown').hover(function() { 
			$(this).find('.dropdown-toggle').dropdown('show')
		}, function() {
			$(this).find('.dropdown-toggle').dropdown('hide')
		});		
	}


	$(window).on('scroll', function(event) {
		contactsFixed()
	});


	$(window).on('resize', function(event) {
		contactsFixed()
	});

	$('.brd-crmbs li:first a').html('<i class="fa fa-home" aria-hidden="true"></i>');

	function contactsFixed () {
		var headerHeight = $('header.jeneral').innerHeight();
		if (window.pageYOffset > headerHeight)
			$('body').addClass('contacts-fixed')
		else
			$('body').removeClass('contacts-fixed')
	}	
});


