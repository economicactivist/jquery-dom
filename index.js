// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
// Give all images inside of an article tag the class of image-center (this class is defined 
// inside of the style tag in the head).
// Remove the last paragraph in the article.
// Set the font size of the title to be a random pixel size from 0 to 100.
// Add an item to the list; it can say whatever you want.
// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing 
// for the list’s existence.
// When you change the numbers in the three inputs on the bottom, the background color of 
// the body should change to match whatever the three values in the inputs are.
// Add an event listener so that when you click on the image, it is removed from the DOM.

$(document).ready(function () {
    console.log("Let’s get ready to party with jQuery!")
});

$('article img').addClass('image-center')
$('article p').last().remove()

let randomPixelSize = Math.round(Math.random()*100)

$('h1').css({
    fontSize: `${randomPixelSize}px` 
});

$('ol').append("<li>Another Awesome Item</li>");
$('aside').html('').html('<p>Sorry about that list!</p>')
const colors = ['red', 'blue', 'green']
$('input').each(function(index){
    $(this).addClass(colors[index])
})

console.log($('input').get(0))

console.log($('input').get())
$('.container').on('change', '.red', function(e) {
    console.log(e.target)
  $('body').css({backgroundColor: `rgb(${e.target.value},${$('.green').val()},${$('.blue').val()})`})
}).on('change', '.green', function(e) {
    console.log(e.target)
  $('body').css({backgroundColor: `rgb(${$('.red').val()},${e.target.value},${$('.blue').val()})`})
}).on('change', '.blue', function(e) {
    console.log(e.target)
  $('body').css({backgroundColor: `rgb(${$('.red').val()},${$('.green').val()},${e.target.value}`})
})

$('img').on('click', function(){
    $(this).remove()
})
