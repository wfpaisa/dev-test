// A $( document ).ready() block.
$( document ).ready(function() {

  
  // Scroll actions
  $('body').scrollspy({ target: '#navbarNav' });
  var scroll = new SmoothScroll('a[href*="#"]');
  function checkMenuTop() {
    if ($('html').scrollTop() > 60) {
      $('#menu').addClass('scroll-dow');
    } else {
      $('#menu').removeClass('scroll-dow');
    }
  } 
  checkMenuTop(); 
  
  $(window).scroll(function () {
    checkMenuTop();
  });


  // Menu
  $('#navbarNav').on('show.bs.collapse', function () {
    $('nav').addClass('nav-open')
  })
  $('#navbarNav').on('hide.bs.collapse', function () {
    $('nav').removeClass('nav-open')
  })

  // Slider
  $.getJSON( "https://api.myjson.com/bins/17ocpi", function(data) {
    
    let sliders = '';

    $.each( data, function( i, item ) {
      
      let active = '';
      if( i === 'slide_1') active = 'active';

      // First word to normal weight
      var title= item.title.trim().split(" ");
      var first = title.shift();
      title = (title.length > 0 ? `<span>${first}</span> ` : first) + title.join(" ");

      sliders += `<div class="carousel-item ${active}" style="background-image: url('${item.image}')">
        <div class="carousel-caption d-md-block">
          <h1><span></span>${title}</h1>
          <p>${item.text}</p>
        </div>
      </div>`;
    });

    $('#slider-data').html(sliders);
    
    setTimeout(() => {
      $('.carousel').carousel();
    }, 1000);
  })

 
});