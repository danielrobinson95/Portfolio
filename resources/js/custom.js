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

$(document).ready(function(){
  console.log('Welcome!');
});
