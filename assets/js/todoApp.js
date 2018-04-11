/* global $ */

// marks the todo item completed or unmark item
$("li").click(function() {
  $(this).toggleClass("completed");
});

// click on X to delete todo
$("span").click(function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      // this prevents the remove() from happen instantly.
      $(this).remove();
      // 'this' is refering to the 'li' not the span
    });
  // .parent().remove(), removes the the parent element which in this case is li
  event.stopPropagation();
  // to prevent 'event bubbling(prevents other event listener to activate)' in other words, this span is inside of an li, which is inside of a ul, which is inside of a div #container, which is inside of a body. if there were event listeners associated to those tags they would activate. to prevent that from happening, jQuery built in method is needed, we need .stopPropagation().
});
