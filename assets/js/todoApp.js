/* global $ */

// 'click()' only adds listeners for existing elements
// 'on('click')' will add listners for potential future elements

// below marks the todo item completed or unmark item
$("ul").on("click", "li", function() {
  // above we need to add an event listener to an element that exists when a page loads, in this case a 'ul', when we click 'li' thats when the code in this block will execute.
  $(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      // above prevents the remove() from happen instantly.
      $(this).remove();
      // above 'this' is refering to the 'li' not the span
    });
  // above .parent().remove(), removes the the parent element which in this case is li
  event.stopPropagation();
  // above is to prevent 'event bubbling(prevents other event listener to activate)' in other words, this span is inside of an li, which is inside of a ul, which is inside of a div #container, which is inside of a body. if there were event listeners associated to those tags they would activate. to prevent that from happening, jQuery built in method is needed, we need .stopPropagation().
});

$("input[type='text']").keypress(function(event) {
  // below is checking to see if the 'enter' key pressed with 'which'
  if (event.which === 13) {
    // below is grabbing new todo input text
    var inputText = $(this).val();
    // below clears/resets the input box
    $(this).val("");
    // below create a new 'li' with 'span' and adds it to 'ul'
    $("ul").append(
      "<li><span><i class='far fa-trash-alt'></i></span> " + inputText + "</li>"
    );
    //
  }
});

$("#toggle-form").click(function() {
  $("input[type='text']").fadeToggle();
});
