// Intialize Lettering JS
$('h1').lettering();

//Make Backstretch GO!!
$.backstretch('/nameplate/img/bg.jpg');

// Masonry
$('main').masonry({
  // options
  itemSelector: 'section',
  itemWidth: 100,
  gutter: 10,
  transitionDuration: '1s'
});