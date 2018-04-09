/* global $ */

// marks the todo item completed or unmark item
$("li").click(function() {
  $(this).toggleClass("completed");
});
