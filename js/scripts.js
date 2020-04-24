$(document).ready(function() {
  $("form#profile").submit(function(event) {
    event.preventDefault();
    var name1 = ($("#firstName").val());
    var name2 = ($("#lastName").val());
    var address = ($("#address").val());
    var result = add(name1, name2, address);
    $("#output").text(result);
  });
});