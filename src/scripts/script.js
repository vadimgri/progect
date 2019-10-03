$(document).ready(function() {
    var div = $('.header__nav-mob-js');
	var button = $('.header-nav-mob__button-js');
	var menu = $('.header__nav-js');
	

	div.click(function(){
		button.toggleClass('open');
		menu.toggleClass('active');
        menu.slideToggle('.header__nav-js_activ');	
	});
    
   
    $('.owl-carousel').owlCarousel({

        loop:true, 

        margin:30,

        responsive:{

            0:{

                items:1,

                dots: true,

                nav:false,

            },

             580:{

                items:2,

                dots: false,

                nav:false,

            },

            1024:{

                items:3,

                dots: false,

                nav:true,
            },

            2560:{

                items:3,

                dots: false,

                nav:false,
            }
        }
    })
    $('.owl-dots button.owl-dot').click(function(){
         $('.owl-dots button.owl-dot').first().css('background-color','#a2a2a2');
    });


    $('.popup-with-form').bind().magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    $('.header-tel__button').bind().magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });


    $('.header-tel__button').click(function(){
        $('.mail').css('display', 'none');
        $('.white-popup-block__title').text('Заказать звонок')
    });

    $('.popup-with-form').click(function(){
        $('.mail').css('display', 'block');
        $('.white-popup-block__title').text('Оставить заявку')
    });
 
})