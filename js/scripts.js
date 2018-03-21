$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();
    var someInput = $("input#person1").val();

    $(".shout").text(someInput.toUpperCase());
  });
});
