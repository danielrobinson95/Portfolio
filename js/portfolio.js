$('.button-collapse').sideNav();

$('.button-collapse').sideNav({
  menuWidth: 200 // Default is 300

});

var options = [{
    selector: '#about',
    offset: 0,
    callback: function(el) {
      Materialize.fadeInImage('#about_text');
    }
  },
  {
    selector: '#experience',
    offset: 0,
    callback: function(el) {
      Materialize.fadeInImage('#experience_text');
    }
  },
  {
    selector: '#profile_image',
    offset: 0,
    callback: function(el) {
      Materialize.fadeInImage('#about_section');
    }
  },
  {
    selector: '#image-test',
    offset: 500,
    callback: function(el) {
      Materialize.fadeInImage($(el));
    }
  }
];
Materialize.scrollFire(options);

$('.pushpin-nav').each(function() {
  var $this = $(this);
  var $target = $('#' + $(this).attr('data-target'));

  $this.pushpin({

    top: $target.offset().top,
    bottom: $target.offset().top + $target.outerHeight() - $this.height(),

  });
});




$(document).ready(function() {
  $('.scrollspy').scrollSpy({
    scrollOffset: 0
  });

  Materialize.fadeInImage('.intro');
});
$('.type-it').typeIt({
    speed: 150,
    lifeLike: false,
    autoStart: false
  })
  .tiPause(1000)
  .tiType('Console.Writel')
  .tiDelete(1)
  .tiType('Line("Welfc)')
  .tiDelete(3)
  .tiType('come!");');
